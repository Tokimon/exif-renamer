export type ReadExifDataAction = (path: string) => Promise<ExifData>;

export type WriteExifDataAction = (path: string, exif: ExifData) => Promise<ExifData>;

export type ChooseDirectoryAction = () => Promise<string | null>;

export type FindFilesAction = (directory: string) => Promise<string[]>;

export type ServerAction = ReadExifDataAction | WriteExifDataAction | FindFilesAction;

export interface ServerActionRecord {
  readExifData: ReadExifDataAction;
  writeExifData: WriteExifDataAction;
  chooseDirectory: ChooseDirectoryAction;
  findFiles: FindFilesAction;
}
