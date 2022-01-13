import { promises as fs, constants } from 'fs';

export default (folder: string): Promise<boolean> => {
  return fs.open(folder, constants.O_RDWR | constants.O_DIRECTORY)
    .then(() => true)
    .catch(() => false);
};
