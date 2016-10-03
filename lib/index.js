import nPath from 'path';
import fs from 'fs';

import globby from 'globby';
import exifTool from 'node-exiftool';
import exifToolExe from 'dist-exiftool';
import moment from 'moment';

const exifProcess = new exifTool.ExiftoolProcess(exifToolExe);

const dateFormat = 'YYYY-MM-DD_HH-mm-ss';
let regEx = dateFormat.replace(/([a-z]{2,4})/ig, (m, chars) => `(\\d{${chars.length}})`);
regEx = new RegExp(`^${regEx}(_\\d+)?$`);

function normalizeSlashes(path) {
  return path.replace(/[\\/]+/g, '/');
}

function loadFiles(glob) {
  console.log('\n--- LOCATING FILES ---\n');
  return globby(glob)
    .then((files) => files.reduce((map, file) => {
      file = normalizeSlashes(file);
      const folder = nPath.dirname(file);
      const fileList = map.get(folder) || new Set();
      fileList.add(file);
      map.set(folder, fileList);
      return map;
    }, new Map()));
}

function formatFileName(file) {
  const fileParse = nPath.parse(file);
  if(regEx.test(fileParse.name)) { return Promise.resolve(null); }

  return new Promise((resolve, reject) => {
    fs.stat(file, (err, stats) => err ? reject(err) : resolve(stats));
  })
    .then((stats) => {
      return exifProcess.readMetadata(file)
        .then((exif) => {
          exif = exif.data[0];
          if(exif.error) { throw exif.error; }

          // Line up stat dates
          const statdates = [
            stats.birthtime,
            stats.mtime,
            stats.ctime,
            stats.atime
          ]
            .filter((date) => !!date);

          // Line up Exif dates
          const exifdates = [
            exif.FileModifyDate,
            exif.FileCreateDate,
            exif.FileAccessDate
          ]
            .filter((exifdate) => !!exifdate)
            // Convert exif dates to a usable date format
            .map((exifdate) => {
              const dateParts = exifdate.split(' ');
              return `${dateParts[0].replace(/[:]+/g, '-')} ${dateParts[1]}`;
            });

          // Match up all the dates
          return statdates.concat(exifdates)
            // We ensure date conversion by using moment
            .map((date) => moment(date).toDate())
            // Find the earliest date and return that (or null if there are no dates)
            .reduce((earliest, curr) => {
              if(earliest === null) { return curr; }
              return Number(earliest) > Number(curr) ? curr : earliest;
            }, null);
        })
        .then((date) => {
          // If we have no dates return null
          if(!date) { return null; }

          // Otherwise transform the date into a file name
          const formattedDate = moment(date).format(dateFormat);
          return nPath.join(fileParse.dir, `${formattedDate}${fileParse.ext}`);
        });
    });
}

function renameFile(path, newPath) {
  return new Promise((resolve, reject) => {
    fs.rename(path, newPath, (err) => err ? reject(err) : resolve(newPath));
  });
}

function renameFolderFiles(folderFileSet) {
  return Promise.all(Array.from(folderFileSet).map((path, i, arr) => {
    return formatFileName(path)
      .then((newPath) => {
        if(newPath) {
          newPath = normalizeSlashes(newPath);

          // Make sure to create a unique file name by adding '_[copy count]' to path
          let count = 0;
          while(folderFileSet.has(newPath)) {
            const pathParse = nPath.parse(newPath);
            const name = pathParse.name
              .replace(/(_(\d+))?$/, (all, end, num) => end ? `_${Number(num) + 1}` : '_1');
            newPath = nPath.join(pathParse.dir, `${name}${pathParse.ext}`);
          }

          folderFileSet.add(newPath);
          return renameFile(path, newPath)
            .then(() => {
              folderFileSet.delete(path);
              console.log(path, ' -> ', newPath);

              return { path, newPath };
            });
        }
      });
  }));
}

exifProcess.open()
  .then(() => loadFiles('C:/Users/Tokimon/Pictures/renames/**/*.jpg'))
  .then((folderMap) => {
    console.log('Renaming started');
    console.log('----------------');

    const renames = [];
    for(let folderFileSet of folderMap.values()) {
      renames.push(renameFolderFiles(folderFileSet));
    }

    return Promise.all(renames);;
  })
  .then(() => {
    exifProcess.close();

    console.log('----------------');
    console.log('Renaming Done!');
  })
  .catch((err) => {
    exifProcess.close();
    console.error(err.toString(), err.stack || '');
  });
