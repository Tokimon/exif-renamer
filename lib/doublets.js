'use strict';

import n_path from 'path';
import compact from 'lodash/array/flatten';
import { find, readFile } from './read';


export function isSame(file1, file2) {
  //file1 = new Buffer(file1, 'binary').toString('base64');
  //file2 = new Buffer(file2, 'binary').toString('base64');

  console.log('Is Same file', new Buffer(file1, 'binary').compare(new Buffer(file2)))

  return new Buffer(file1, 'binary').compare(new Buffer(file2));
}


export default function doublets(args) {
  console.log('-- Removing doublets --');

  find(n_path.join(args.path, `/**/*@(_+([0-9]).${args.ext.join('|')})`).then((files) => {
    const filemap = {};

    // first map filenames
    files.forEach((file) => {
      const mainFile = file.replace(/_\d+$/, '');
      if( filemap[mainFile] ) {  filemap[mainFile] = []; }
      filemap[mainFile].push(file);
    });

    // Compare to the other doublets (and main file)
    files.map((file) => {
      const mainFile = file.replace(/_\d+$/, '');
      const doublets = filemap[mainFile];

      Promise.all([
        readFile(file),
        readFile(mainFile),
        doublets.filter((doublet) => file !== doublet).map((file) => readFile(file))
      ])
      .then(files => flatten(files))
    });
  }));

// TODO: Store file data in memory in the array, but delete when reached another key entry

  //files = files.map((file) => new Promise((resolve, reject) => {
  //  // Is file a possible doublet?
  //  const m = /_\d+(\.[^.]+)$/i.exec(file);
  //  // If not just return the file
  //  if(!m) { return resolve(file); }
  //
  //  // Read current doublet file and the original, to compare their content
  //  Promise.all([
  //    readFile(file),
  //    readFile(file.replace(m[0], m[1]))
  //  ])
  //    .then((datas) => {
  //      // If it is the same file
  //      if( isSame(datas[0], datas[1]) ) {
  //        // delete it
  //        fs.unlinkSync(file);
  //        console.log('Removed doublet:', file);
  //        // and remove from the collection of files
  //        resolve(null);
  //      } else {
  //        // if it is not a doublet leave it in the collection of files
  //        resolve(file);
  //      }
  //    })
  //    .catch((err) => {
  //      // if something went wrong when deleting the doublet
  //      console.warn('Unable to delete doublet:', file);
  //      console.warn('- error: ', err);
  //      // remove it from the collection of files
  //      resolve(null);
  //    });
  //}));

  // Return list of files without the doublets
  return Promise.all(files).then((cleaned) => {
    cleaned = compact(cleaned);
    console.log('Removed %s doublets.', files.length - cleaned.length);
    return cleaned;
  });
}
