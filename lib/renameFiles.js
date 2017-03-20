const nPath = require('path');
const co = require('co');
const fs = require('fs-promise');

const fileDateName = require('./fileDateName');

// This is a list of all file names found globally from the starting point.
// It is used to rename file according to global findings
const globaFileNames = new Set();

function *newFileName(file, renamedFiles, { globalDoublets, dateFormat }) {
  const fileData = yield fileDateName(file, dateFormat);

  // If we cannot extract a exif date name, we ignore the file, but keep the
  // path on record to compare with other files
  if(!fileData) { return null; }

  // Try to get the duplicate number for the file (eg. xxx_2.png)
  while(true) {
    if(
      // If we are checking the local folder , just check the path
      (!globalDoublets && !renamedFiles.has(fileData.name)) ||

      // But if we should check globally (relative to the root),
      // we check if the filename exists in the list of filenames
      (globalDoublets && !globaFileNames.has(fileData.name))
    ) { break; }

    // If the file name already exists, we rename it with a counter
    fileData.name = fileData.name
      .replace(/(_(\d+))?$/, (all, end, num) => end ? `_${Number(num) + 1}` : '_1');
  }

  return fileData;
}

module.exports = function *renameFiles(folder, files, settings, renamedFiles) {
  const file = files.shift();
  const filePath = nPath.join(folder, file);

  // List contains all file names for easy lookup
  // (even file names that has not been renamed)
  if(!renamedFiles) { renamedFiles = new Set(); }

  // Remove the first file in the files list and process it
  let newFile = file;

  try {
    // Get the new Date name for the file
    const fileData = yield co(newFileName(filePath, renamedFiles, settings));

    // If the file name has changed we rename the file
    if(fileData) {
      if(fileData.file() !== file) {
        yield fs.rename(filePath, nPath.join(folder, fileData.file()));
        console.log('  ', file, '  ->  ', fileData.file());
      } else {
        console.log('  ', file, '  ->  Not Renamed');
      }

      // In any case we add the filepath to the list
      newFile = fileData.name;
    }

    renamedFiles.add(newFile);
    globaFileNames.add(newFile);
  } catch(err) {
    console.error(`Failed to rename: ${file}`);
    throw err;
  }

  if(files.length) { yield renameFiles(folder, files, settings, renamedFiles); }

  return renamedFiles;
};
