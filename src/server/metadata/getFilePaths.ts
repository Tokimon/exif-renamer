import { join } from 'path';
import glob from 'globby';



export const fileGlobExpression = (root: string, extensions: string[], shallow?: boolean) => {
  let fileGlob = `*.{${extensions.join(',')}}`;
  if (!shallow) { fileGlob = join('**', fileGlob); }
  if (root.includes('\\')) { root = root.replaceAll('\\', '/'); }


  return join(root, fileGlob);
};



export default (root: string, extensions: string[], shallow?: boolean): Promise<string[]> =>
  glob(fileGlobExpression(root, extensions, shallow));
