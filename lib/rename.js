import nPath from 'path';
import fs from 'fs';

import co from 'co';
import globby from 'globby';
import exifTool from 'node-exiftool';
import exifToolExe from 'dist-exiftool';
import moment from 'moment';
import yargs from 'yargs';

const args = yargs
  .array('ext')
  .argv;

const exifProcess = new exifTool.ExiftoolProcess(exifToolExe);

// Make these dynamic with CLI arguments
const dateFormat = args.format || 'YYYY-MM-DD_HH-mm-ss';
const extensions = args.ext || ['jpg', 'jpeg', 'png'];
const globalDoublets = !args.local;

const fileNames = new Set();


let regEx = dateFormat.replace(/([a-z]{2,4})/ig, (m, chars) => `(\\d{${chars.length}})`);
regEx = new RegExp(`^${regEx}(_\\d+)?$`);

function promisefy(fn) {
  return (...args) => {
    return new Promise((resolve, reject) => {
      fn(...args, (err, data) => err ? reject(err) : resolve(data));
    });
  };
}

const rename = promisefy(fs.rename.bind(fs));
const stat = promisefy(fs.stat.bind(fs));

function loadFiles(root) {
  const exts = extensions.map((e) => e.toLowerCase())
    .concat(extensions.map((e) => e.toUpperCase()));

  return globby(nPath.join(root, `/**/*.@(${exts.join('|')})`))
    .then((files) => files.reduce((map, file) => {
      const folder = nPath.dirname(file);
      const fileList = map.get(folder) || new Set();

      fileList.add(nPath.basename(file));
      map.set(folder, fileList);

      return map;
    }, new Map()));
}

function *fileDate(file) {
  const stats = yield stat(file);
  let exif = yield exifProcess.readMetadata(file);

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
  const date = statdates.concat(exifdates)
    // We ensure date conversion by using moment
    .map((date) => moment(date).toDate())
    // Find the earliest date and return that (or null if there are no dates)
    .reduce((earliest, curr) => {
      if(earliest === null) { return curr; }
      return Number(earliest) > Number(curr) ? curr : earliest;
    }, null);

  // If we don't have any date at the end we cannot rename the file
  if(!date) { throw new Error('Could not extract date'); }

  return date;
}

function *formatFileName(file) {
  let { name, ext, dir } = nPath.parse(file);

  try {
    // If the file has not already a correct name,
    // rename by using its earliest date
    if(!regEx.test(name)) {
      const date = yield fileDate(file);
      // Otherwise transform the date into a file name
      name = moment(date).format(dateFormat);
    } else {
      name = name.replace(/_\d+$/, '');
    }

    ext = ext.toLowerCase();

    return { name, ext, file() { return `${this.name}${this.ext}`; } };
  } catch(ex) {
    console.error(ex.toString(), ex.stack || '');
    return null;
  }
}

function *renameFile(folder, file, list) {
  const fileData = yield formatFileName(nPath.join(folder, file));

  if(!fileData) {
    list.add(file);
    return fileData;
  }

  // Make sure to create a unique file name by adding '_[copy count]' to path
  let count = 0;

  while(true) {
    if(
      // If we are checking the local folder , just check the path
      (!globalDoublets && !list.has(fileData.name))

      // But if we should check globally (relative to the root),
      // we check if the filename exists in the list of filenames
      || (globalDoublets && !fileNames.has(fileData.name))
    ) { break; }

    // If the file name already exists, we rename it with a counter
    fileData.name = fileData.name
      .replace(/(_(\d+))?$/, (all, end, num) => end ? `_${Number(num) + 1}` : '_1');
  }

  return fileData;
}


function *renameFiles(folder, files, list = new Set()) {
  const file = files.shift();

  try {
    const fileData = yield co(renameFile(folder, file, list));

    if(fileData.file() !== file) {
      yield rename(nPath.join(folder, file), nPath.join(folder, fileData.file()));
      console.log('  ', file, '  ->  ', fileData.file());
    }

    list.add(fileData.name);
    fileNames.add(fileData.name);
  } catch(err) {
    console.error(`Failed to rename: ${file}`);
    console.error(err.toString(), err.stack || '');
  }

  if(files.length) { yield renameFiles(folder, files, list); }

  return list;
}


function *renameFolderFiles(folderList, folders) {
  if(!folders) { folders = [...folderList.keys()]; }

  const folder = folders.shift();

  console.log('Renaming files in:', folder);
  console.log('---');

  const newList = yield renameFiles(folder, [...folderList.get(folder)]);

  folderList.set(folder, newList);

  console.log('---');

  if(folders.length) { yield renameFolderFiles(folderList, folders); }

  return folderList;
}

export function renamer(path) {
  console.log('Locating files');
  console.log('----------------');

  exifProcess.open()
    .then(() => loadFiles(path))
    .then((folders) => {
      const totalFiles = [...folders.values()].reduce((total, set) => total + set.size, 0);

      console.log(`${totalFiles} files found \n`);
      if(!totalFiles) { return; }

      console.log('Starting renaming process');
      console.log('----------------');

      return co(renameFolderFiles(folders))
        .then(() => {
          console.log('----------------');
          console.log('Renaming Done!');
        })
        .catch((err) => {
          console.error(err.toString(), err.stack || '');
        });
    })
    .then(() => exifProcess.close())
    .catch((err) => {
      exifProcess.close();
      console.error(err.toString(), err.stack || '');
    });
}
