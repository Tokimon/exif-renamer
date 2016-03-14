'use strict';

import n_path from 'path';
import fs from 'fs';
import exif from 'exiftool.js';
import glob from 'glob';

export function find( path ) {
  return new Promise((resolve, reject) => {
    glob(path, (err, files) => err ? reject(err) : resolve(files || []));
  });
}

export function readFile(file) {
  return new Promise((resolve, reject) => fs.readFile(file, (err, data) => resolve(err ? null : data)));
}

export function imageData( path ) {
  return new Promise((resolve, reject) => {
    exif.getExifFromLocalFileUsingNodeFs(fs, path, (err, metadata) => {
      err ? reject(err) : resolve({ path: path, meta: metadata });
    })
  });
}

export default function allImageDatas( path ) {
  console.log(`Finding photos in path: ${path}`);

  return find(path).then((files) => {
    if(!files.length) { throw 'No files found in path!' }
    return _fileDatas(files);
  });
}

function _fileDatas(files, arr=[], from=0, max=files.length-1) {
  // Only grab metadata from max 300 files at a time.
  const to = from + 300;
  return _chunk( files, from, to )
    .then(( imagedatas ) => arr.concat(imagedatas))
    .then((datas) => to < max ? _fileDatas(files, datas, len, to) : datas);
}

function _chunk( files, from, to ) {
  return Promise.all(files.slice(from, to).map((filename) => imageData(filename)))
}
