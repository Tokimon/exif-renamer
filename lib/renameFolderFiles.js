const renameFiles = require('./renameFiles');

module.exports = function *renameFolderFiles(folderList, settings, folders) {
  if(!folders) { folders = [...folderList.keys()]; }

  const folder = folders.shift();

  console.log('Renaming files in:', folder);
  console.log('---');

  folderList.set(folder, yield renameFiles(folder, [...folderList.get(folder)], settings));

  console.log('---');

  if(folders.length) { yield renameFolderFiles(folderList, settings, folders); }

  return folderList;
};
