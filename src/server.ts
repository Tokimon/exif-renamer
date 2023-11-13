import { BrowserWindow, app } from 'electron';
import 'module-alias/register';
import { resolve } from 'path';
import { handleRequest } from '~/server/requests/handleRequest';

function createWindow() {
  const win = new BrowserWindow({
    width: 1024,
    height: 860,
    webPreferences: {
      nodeIntegration: false, // Done use node integration on renderer environment
      contextIsolation: true, // protect against prototype pollution
      preload: resolve('backend/preload.js'), // use a preload script
    },
  });

  win.loadFile(resolve('frontend/index.html'));
  win.webContents.openDevTools();
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

handleRequest();
