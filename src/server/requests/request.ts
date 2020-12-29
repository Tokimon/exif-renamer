import { ipcRenderer } from 'electron';

import type { ExifData } from '~/types/exif.d';



const request = (type: string, payload?: Record<string, unknown>): Promise<any> =>
  ipcRenderer.invoke('request', { type, payload });



export const readExifData = (path: string): Promise<ExifData> =>
  request('read-exif', { path });

export const writeExifData = (path: string, exif: ExifData): Promise<ExifData> =>
  request('write-exif', { path, exif });

export const findFiles = (): Promise<string[]> =>
  request('find-files');