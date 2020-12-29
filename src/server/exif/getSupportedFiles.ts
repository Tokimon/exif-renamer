import { join } from 'path';
import glob from 'globby';

import extensions from './extensions.json';



const fileGlob = `*.{${extensions.join(',')}}`;
const allFilesglob = join('**', fileGlob);
const exifGlobPath = (shallow?: boolean) => (path: string) => join(
  path,
  shallow ? fileGlob : allFilesglob
);



export default (paths: string | string[], shallow?: boolean): Promise<string[]> => {
  const buildGlobPath = exifGlobPath(shallow);

  const globExp = Array.isArray(paths)
    ? paths.map(buildGlobPath)
    : buildGlobPath(paths);

  return glob(globExp);
};