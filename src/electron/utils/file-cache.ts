import nPath from 'path';
import { promises as fs } from 'fs';

import debounce from 'lodash/debounce';


import type { ExifCache, ExifData } from '@/types/exif.d'



let _cache: ExifCache = {};

const filename = (folder: string): string => nPath.join(folder, '.cache');



export const load = async (folder: string): Promise<ExifCache> => {
  _cache = {};

  try {
    const json = await fs.readFile(filename(folder));
    _cache = JSON.parse(json.toString());
  } catch (ex) { /* do nothing */ }

  return _cache;
};

export const save = (folder: string): Promise<void> => {
  return fs.writeFile(filename(folder), JSON.stringify(_cache));
};

export const debounceSave = debounce(save, 5000);

export const addFile = (path: string, data: ExifData): ExifCache => {
  _cache[path] = data;
  return _cache;
};

export const getFile = (path: string): ExifData | undefined => {
  return _cache[path];
};

export const removeFile = (path: string): ExifCache => {
  delete _cache[path];
  return _cache;
};
