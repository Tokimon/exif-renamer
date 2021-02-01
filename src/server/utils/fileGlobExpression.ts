import { join } from 'path';



export default (root: string, extensions: string[], shallow?: boolean): string => {
  let fileGlob = `*.{${extensions.join(',')}}`;
  if (!shallow) { fileGlob = join('**', fileGlob); }
  if (root.includes('\\')) { root = root.replaceAll('\\', '/'); }


  return join(root, fileGlob);
};
