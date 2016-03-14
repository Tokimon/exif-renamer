'use strict';

/* global Buffer */

import fs from 'fs';
import n_path from 'path';
import cmdArgs from 'command-line-args';
import moment from 'moment';
import compact from 'lodash/array/compact';

import allFileDatas, { find } from './read';
import doublets from './doublets';

function renameFiles(files, cb, i=0) {
  return new Promise((resolve, reject) => {
    const file = files[i];
    if( !file ) {
      // If we reached the end of the list just resolve, otherwise remove the entry and try another
      return i >= files.length ? resolve(files) : renameFiles(files.splice(i, 1), cb, i).then(resolve);
    }

    newName(file).then((newpath) => {
      fs.rename(file.path, newpath, (err) => {
        if(err) { return console.warn(`Couldn't rename: ${files.splice(i--, 1).path} - skipping file`); }
        renameFiles(files, cb, i+1).then(resolve);
      });
    });
  });
}

function newName(filedata) {
  const date = filedata.meta.CreateDate.split(' ');
  const datename = moment(`${date[0].replace(/[:]+/g, '-')} ${date[1]}`).format(args.name);
  return uniqueName(datename, n_path.extname(filedata.path), n_path.dirname(filedata.path));
}

function uniqueName(name, ext, dir) {
  return find(n_path.join(dir, `${name}?(_+([0-9]))${ext}`)).then((files) => {
    // Find the next number if the file already exists
    const num = files.reduce((num, file) => {
      const m = /_(\d+)\.[^.]+$/g.exec(file);
      return Math.max((!m ? 0 : Number(m[1])) + 1, num);
    }, 0);

    name = `${name}${num > 0 ? '_'+ num : ''}`;
    return n_path.join(dir, `${name}${ext}`)
  });
}





// Parse command line args
const args = cmdArgs([
  { name: 'path', alias: 'p', type: String, defaultOption: true },
  { name: 'keepduplets', type: Boolean },
  { name: 'name', alias: 'n', type: String, defaultValue: 'YYYY-MM-DD - hh.mm.ss' },
  { name: 'exp', type: String, defaultValue: '^\\d{4}(-\\d{2}){2} - (\\d{2})(\\.\\d{2}){2}(_\\d+)?\\.[^.]+$' },
  { name: 'ext', type: String, multiple: true, defaultValue: ['jpg', 'jpeg', 'png'] }
]).parse();

// Get all files in the designated folder (with the specified extension)
allFileDatas(n_path.join(args.path, `/**/*.@(${args.ext.join('|')})`))
  // Filter out files that have all ready been renamed
  //.then((files) => files.filter((file) => {
  //  return file && !(new RegExp(args.exp)).test(n_path.basename(file.path))
  //}))
  // Rename files
  .then((files) => {
    if( !files.length ) { throw 'No files matched the filter expression: ' + args.exp; }

    return renameFiles(files).then((renamedFiles) => {
      console.log('Renamed %s files', renamedFiles.length);
      return renamedFiles;
    });
  })
  // Delete duplicates (unless indicated not to)
  .then((files) => !args.keepduplets ? removeDoublets(files) : files)
  // Indicate that the process is done
  .then((files) => console.log('Done!\nRenamed and kept %s files.', files.length))
  .catch((err) => console.error('Error:', err));
