import nPath from 'path';
import { promises as fs } from 'fs';

import debounce from 'lodash.debounce';

let _cache = {};

const filename = (folder) => nPath.join(folder, '.cache');

export const load = async (folder) => {
  _cache = {};

  try {
    const json = await fs.readFile(filename(folder));
    _cache = JSON.parse(json);
  } catch (ex) { /* do nothing */ }

  return _cache;
};

export const save = (folder) => {
  return fs.writeFile(filename(folder), JSON.stringify(_cache));
};

export const debounceSave = debounce(save, 5000);

export const addFile = (path, data) => {
  _cache[path] = data;
  return _cache;
};

export const getFile = (path) => {
  return _cache[path];
};

export const removeFile = (path) => {
  delete _cache[path];
  return _cache;
};
