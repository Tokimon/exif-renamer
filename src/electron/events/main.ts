import { ipcMain } from 'electron';

import type {
  readFileExifHandler,
  writeFileExifHandler,
  findFilePathsHandler
} from '~/definitions/event-handlers.d';

import {
  READ_FILE_EXIF,
  WRITE_FILE_EXIF,
  FIND_FILE_PATHS
} from './events';



export const handleReadFileExif = (handler: readFileExifHandler): void => {
  ipcMain.handle(READ_FILE_EXIF, handler);
};

export const handleWriteFileExif = (handler: writeFileExifHandler): void => {
  ipcMain.handle(WRITE_FILE_EXIF, handler);
};

export const handleFindFilePaths = (handler: findFilePathsHandler): void => {
  ipcMain.handle(FIND_FILE_PATHS, handler);
};
