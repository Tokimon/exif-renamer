import globby from 'globby';
import nPath from 'path';



interface GlobProps {
  folder: string;
  extensions: string[];
}



// ExifTool supported extensions
// (http://www.sno.phy.queensu.ca/~phil/exiftool)
export function extGlob(ext: string[]): string {
  const extString = ext.join('|');
  const exts = [extString.toLowerCase(), extString.toUpperCase()];
  return `*.@(${exts.join('|')})`;
}

export function glob({ folder, extensions }: GlobProps): Promise<string[]> {
  const exp = nPath.resolve(folder, extGlob(extensions)).replace(/\\/g, '~/');
  return globby(exp);
}
