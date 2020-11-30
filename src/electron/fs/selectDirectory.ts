import { BrowserWindow, dialog } from 'electron';

export default (browserWindow: BrowserWindow): Promise<Electron.OpenDialogReturnValue> =>
  dialog.showOpenDialog(browserWindow, {
    properties: ['openDirectory']
  });
