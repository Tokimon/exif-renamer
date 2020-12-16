import { app, BrowserWindow, contextBridge } from 'electron';
import { resolve } from 'path';

// import * as rendererEvents from '@/electron/events/renderer';
// import selectDirectory from '@/electron/fs/selectDirectory';



function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false // true
    }
  });

  win.loadFile(resolve('public/index.html'));
  win.webContents.openDevTools();

  // contextBridge.exposeInMainWorld(
  //   '__electron__',
  //   {
  //     ...rendererEvents,
  //     selectDirectory: selectDirectory(win)
  //   }
  // );
}

app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
