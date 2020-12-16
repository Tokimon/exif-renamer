import { ipcRenderer } from 'electron';

import type { ExifData } from '@/types/exif.d';

import {
  READ_FILE_EXIF,
  WRITE_FILE_EXIF,
  FIND_FILE_PATHS
} from './events';



export const readFileExif = (filePath: string): Promise<ExifData> =>
  ipcRenderer.invoke(READ_FILE_EXIF, filePath);

export const writeFileExif = (filePath: string, exif: ExifData): Promise<ExifData> =>
  ipcRenderer.invoke(WRITE_FILE_EXIF, filePath, exif);

export const findFolderFiles = (folderPath: string): Promise<string[]> =>
  ipcRenderer.invoke(FIND_FILE_PATHS, folderPath);
