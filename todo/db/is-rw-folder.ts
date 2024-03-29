import { constants, promises as fs } from 'fs';

export default (folder: string): Promise<boolean> => {
  return fs
    .open(folder, constants.O_RDWR | constants.O_DIRECTORY)
    .then(() => true)
    .catch(() => false);
};
