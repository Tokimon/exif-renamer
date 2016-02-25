import n_path from 'path';
import fs from 'fs';
import exif from 'exiftool';
import glob from 'glob';

export function find( path ) {
  return new Promise((resolve, reject) => {
    glob(path, (err, files) => err ? reject(err) : resolve(files));
  });
}

export function imageData( imagepath ) {
  return new Promise((resolve, reject) => {
    fs.readFile(imagepath, (err, file) => {
      if( err ) { return reject(err); }
      exif.metadata(data, (err, metadata) => err ? reject(err) : resolve({ path: imagepath, meta: metadata }));
    });
  });
}

export default function allImageDatas( path ) {
  return find(path).then((files) => _fileDatas(files));
}

function _fileDatas(files, arr=[], from=0, max=files.length-1) {
  // Only grab metadata from max 300 files at a time.
  const to = from + 300;
  return _chunk( files, from, to )
    .then(( imagedatas ) => arr.concat(imagedatas))
    .then((datas) => to < max ? _fileDatas(files, datas, len, to) : datas);
}

function _chunk( files, from, to ) {
  return Promise.all(files.slice(from, to).map((filename) => readFileMetadata(filename)))
}
