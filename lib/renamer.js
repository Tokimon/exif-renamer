const co = require('co');
const yargs = require('yargs');
const loadFiles = require('./loadFiles');
const exifProcess = require('./exifProcess');
const renameFolderFiles = require('./renameFolderFiles');

const args = yargs
  .array('ext')
  .argv;

module.exports = function renamer(path) {
  console.log('Locating files');
  console.log('----------------');

  exifProcess.open()
    .then(() => loadFiles(path, args.ext))
    .then((folderList) => {
      const totalFiles = [...folderList.values()].reduce((total, set) => total + set.size, 0);

      console.log(`${totalFiles} files found \n`);
      if(!totalFiles) { return; }

      console.log('Starting renaming process');
      console.log('----------------');

      return co(renameFolderFiles({ folderList, globalDoublets: !args.local, dateFormat: args.format }))
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
};
