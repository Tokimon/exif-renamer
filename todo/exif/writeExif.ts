import type { ExifData } from '~/types/exif';

export type writeExifPayload = {
  filePath: string;
  exifData: ExifData;
};

export default (payload: writeExifPayload) => Promise.resolve(['Hey writing exif data works']);
