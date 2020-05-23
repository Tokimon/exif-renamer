const { ipcRenderer, ipcMain } = require('electron');

const events = {
  UPDATE_EXIF: 'update-exif',
  READ_EXIF: 'read-exif'
};

module.exports = () => {
  // Handle EXIF updates
  // Handle EXIF read

  return {
    update: (path, data) => ipcRenderer.invoke(events.UPDATE_EXIF, data),
    read: (...paths) => ipcRenderer.invoke(events.READ_EXIF, ...paths)
  };
};
