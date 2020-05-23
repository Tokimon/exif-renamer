const { ipcRenderer, ipcMain } = require('electron');
const glob = require('globby');

const uniqueArray = require('vanillajs-helpers/cjs/uniqueArray').default;


const getFiles = async (...paths) => {
  const files = await glob(...paths);
  return uniqueArray(files);
};



const events = {
  READ_FILES: 'read-files'
};

module.exports = () => {
  ipcMain.handle(events.READ_FILES, getFiles);

  return {
    read: (...paths) => ipcRenderer.invoke(events.READ_FILES, ...paths)
  };
};
