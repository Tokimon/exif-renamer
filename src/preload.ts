import 'module-alias/register';
import { contextBridge } from 'electron';

import * as request from '~/server/requests/request';


// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld('server', {
  ...request
});