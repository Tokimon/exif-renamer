export type readExifPayload = {
  filePath: string;
};

export default (payload: readExifPayload) => Promise.resolve(['Hey reading exif data works']);