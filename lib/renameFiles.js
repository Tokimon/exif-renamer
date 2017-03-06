const nPath = require('path');
const co = require('co');
const fs = require('fs-promise');
const fileDateName = require('./fileDateName');

// This is a list of all file names found globally from the starting point.
// It is used to rename file according to global findings
const fileNames = new Set();

function *renameFile({ folder, file, list, globalDoublets, dateFormat }) {
  const fileData = yield fileDateName(nPath.join(folder, file), dateFormat);

  // If we cannot extract a exif date name, we ignore the file, but keep the
  // path on record to compare with other files
  if(!fileData) {
    list.add(file);
    return null;
  }

  // Try to get the duplicate number for the file (eg. xxx_2.png)
  while(true) {
    if(
      // If we are checking the local folder , just check the path
      (!globalDoublets && !list.has(fileData.name)) ||

      // But if we should check globally (relative to the root),
      // we check if the filename exists in the list of filenames
      (globalDoublets && !fileNames.has(fileData.name))
    ) { break; }

    // If the file name already exists, we rename it with a counter
    fileData.name = fileData.name
      .replace(/(_(\d+))?$/, (all, end, num) => end ? `_${Number(num) + 1}` : '_1');
  }

  return fileData;
}

module.exports = function *renameFiles(settings) {
  const { files, folder } = settings;

  // List contains all file names for easy lookup
  // (even file names that has not been renamed)
  if(!settings.list) { settings.list = new Set(); }

  // Remove the first file in the files list and process it
  const file = files.shift();

  try {
    // Get the new Date name for the file
    const fileData = yield co(renameFile(Object.assign({}, settings, { file })));

    // If the file name has changed we rename the file
    if(fileData && fileData.file() !== file) {
      yield fs.rename(nPath.join(folder, file), nPath.join(folder, fileData.file()));
      console.log('  ', file, '  ->  ', fileData.file());
    }

    // In any case we add the filepath to the list
    settings.list.add(fileData.name);
    fileNames.add(fileData.name);
  } catch(err) {
    console.error(`Failed to rename: ${file}`);
    console.error(err.toString(), err.stack || '');
  }

  if(files.length) { yield renameFiles(settings); }

  return settings.list;
};
