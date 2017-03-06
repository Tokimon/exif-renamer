const renameFiles = require('./renameFiles');

module.exports = function *renameFolderFiles(settings) {
  const { folderList } = settings;
  if(!settings.folders) { settings.folders = [...folderList.keys()]; }

  const folder = settings.folders.shift();

  console.log('Renaming files in:', folder);
  console.log('---');

  const newList = yield renameFiles(folder, [...folderList.get(folder)]);

  folderList.set(folder, newList);

  console.log('---');

  if(settings.folders.length) { yield renameFolderFiles(settings); }

  return folderList;
};
