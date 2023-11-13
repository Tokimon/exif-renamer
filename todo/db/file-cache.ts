import { promises as fs } from 'fs';
import debounce from 'lodash/debounce';
import nPath from 'path';
import type { ExifCache, ExifData } from '~/types/exif.d';

let _cache: ExifCache = new Map();

const filename = (folder: string): string => nPath.join(folder, '.cache');

export const load = async (folder: string): Promise<ExifCache> => {
  try {
    const json = await fs.readFile(filename(folder));
    const obj = JSON.parse(json.toString());
    _cache = new Map(Object.entries(obj));
  } catch (ex) {
    _cache = new Map();
  }

  return _cache;
};

export const save = (folder: string): Promise<void> => {
  return fs.writeFile(filename(folder), JSON.stringify(_cache));
};

export const debounceSave = debounce(save, 5000);

export const addFile = (path: string, data: ExifData): ExifCache => {
  _cache.set(path, data);
  return _cache;
};

export const getFile = (path: string): ExifData | undefined => {
  return _cache.get(path);
};

export const removeFile = (path: string): ExifCache => {
  _cache.delete(path);
  return _cache;
};
