import { ipcRenderer } from 'electron';

// import type { ExifData } from '~/types/exif.d';



const request = (type: string, payload?: unknown): Promise<any> =>
  ipcRenderer.invoke('request', { type, payload });



// export const readExifData = (path: string): Promise<ExifData> =>
//   request('readExif', path);

// export const writeExifData = (path: string, exif: ExifData): Promise<ExifData> =>
//   request('writeExif', { path, exif });

export const findFiles = (directory: string): Promise<string[]> =>
  request('findFiles', directory);

export const chooseDirectory = (): Promise<string | null> =>
  request('chooseDirectory');