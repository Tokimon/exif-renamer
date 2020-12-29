import type { Tags } from 'exiftool-vendored/dist/Tags.d';


export type ExifData = Tags;

export type ExifCache = Map<string, ExifData>;
