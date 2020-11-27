import globby from 'globby';
import nPath from 'path';

// ExifTool supported extensions
// (http://www.sno.phy.queensu.ca/~phil/exiftool)
export function extGlob(ext) {
  ext = ext.join('|');
  const exts = [ext.toLowerCase(), ext.toUpperCase()];
  return `*.@(${exts.join('|')})`;
}

export function glob({ folder, extensions }) {
  const exp = nPath.resolve(folder, extGlob(extensions)).replace(/\\/g, '/');
  return globby(exp);
}
