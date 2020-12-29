export type ReadExifDataAction = (path: string) => Promise<ExifData>;

export type WriteExifDataAction = (path: string, exif: ExifData) => Promise<ExifData>;

export type FindFilesAction = () => Promise<string[] | null>;

export type ServerAction = ReadExifDataAction | WriteExifDataAction | FindFilesAction;


export interface ServerActionRecord {
  readExifData: ReadExifDataAction;
  writeExifData: WriteExifDataAction;
  findFiles: FindFilesAction;
}