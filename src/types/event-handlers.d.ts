import type { IpcMainInvokeEvent } from 'electron';

import type { ExifData } from '@/types/exif';



export type readFileExifHandler = (
  event: IpcMainInvokeEvent,
  filePath: string
) => Promise<ExifData>;

export type writeFileExifHandler = (
  event: IpcMainInvokeEvent,
  filePath: string,
  exifData: ExifData
) => Promise<[ExifData]>;

export type findFilePathsHandler = (
  event: IpcMainInvokeEvent,
  filePath: string
) => Promise<string[]>;
