import { join } from 'path';
import glob from 'globby';

import extensions from './extensions.json';



const fileGlob = `*.{${extensions.join(',')}}`;
const allFilesglob = join('**', fileGlob);



export default (root: string, shallow?: boolean): Promise<string[]> => {
  const fileExp = shallow ? fileGlob : allFilesglob;
  return glob(join(root, fileExp));
};