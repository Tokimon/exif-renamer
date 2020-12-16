// https://www.npmjs.com/package/exiftool-vendored

import { exiftool } from 'exiftool-vendored';

import type { ExifData } from '@/types/exif';



export { exiftool };

export const writeFileExif = (filePath: string, exifData: ExifData): Promise<void> => {
  return exiftool.write(filePath, exifData);
};


export const readFileExif = (filePath: string): Promise<ExifData> => {
  return exiftool.read(filePath);
};


// export const getThumbnail = (filePath: string): ExifData => {
//   // check how this is actually done and if a thumbnail has be generated
//   // return exiftool.extractThumbnail(filePath);
// };

// export const cleanFileExifTags = (filePath: string): ExifData => {
//   // check how this is actually done and if a thumbnail has be generated
//   // return exiftool.rewriteAllTags(filePath, filePath);
// };
