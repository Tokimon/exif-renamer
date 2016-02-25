'use strict';

/* global Buffer */

import fs from 'fs';
import n_path from 'path';
import cmdArgs from 'command-line-args';
import moment from 'moment';

import allImageDatas, { find, readFile } from './read';

function renameImages(images, cb, i=0) {
  return new Promise((resolve, reject) => {
    const image = images[i];
    if( !image ) {
      // If we reached the end of the list just resolve, otherwise remove the entry and try another
      return i >= images.length ? resolve(images) : renameImages(images.splice(i, 1), cb, i).then(resolve);
    }

    newName(image).then((newpath) => {
      fs.rename(image.path, newpath, (err) => {
        if(err) { console.warn(`Couldn't rename: ${images.splice(i--, 1).path} - skipping file`); }
        renameImages(images, cb, i+1).then(resolve);
      });
    });
  });
}

function newName(imagedata) {
  const date = imagedata.meta.CreateDate.split(' ');
  const datename = moment(`${date[0].replace(/[:]+/g, '-')} ${date[1]}`).format(args.name);
  return uniqueName(datename, n_path.extname(imagedata.path), n_path.dirname(imagedata.path));
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



function isSame(image1, image2) {
  //image1 = new Buffer(image1, 'binary').toString('base64');
  //image2 = new Buffer(image2, 'binary').toString('base64');

  return new Buffer(image1, 'binary').compare(new Buffer(image2));
}

function removeDuplets(images) {
  images = images.map((image) => {
    const m = /_\d+(\.[^.]+)$/i.exec(image);
    if(!m) { return null; }

    // Read current duplet file and the original, to compare their content
    return Promise.all([
      readFile(image),
      readFile(image.replace(m[0], m[1]))
    ])
      // If they match return the path for it to be deleted
      .then((datas) => isSame(datas[0], datas[1]) ? image : null);
  });

  // Delete duplets
  return Promise.all(images).then((duplets) => {
    duplets.forEach((duplet) => { if(duplet) { fs.unlinkSync(duplet); }});
  });
}

const args = cmdArgs([
  { name: 'path', alias: 'p', type: String, defaultOption: true },
  { name: 'keepduplets', type: Boolean },
  { name: 'name', alias: 'n', type: String, defaultValue: 'YYYY-MM-DD - hh.mm.ss' },
  { name: 'exp', type: String, defaultValue: '^\d{4}(-\d{2}){2} - (\d{2})(\.\d{2}){2}' },
  { name: 'ext', type: String, multiple: true, defaultValue: ['jpg', 'jpeg', 'png'] }
]).parse();

// Get all files in the designated folder (with the specified extension)
allImageDatas(n_path.join(args.path, `/**/*.@(${args.ext.join('|')})`))
  // Filter out images that have allready been renamed
  .then((images) => images.filter((image) => image && !(new RegExp(args.exp)).test(n_path.basename(image.path))))
  // Rename images
  .then((images) => new Promise((resolve, reject) => {
    renameImages(images, (renamedPhotos) => resolve(renamedPhotos));
  }))
  // Delete duplicates (unless indicated not to)
  .then((images) => !args.keepduplets ? removeDuplets(images) : images)
  // Indicate that the process is done
  .then((images) => console.log(`Done!\nRenamed ${images.length} files.`))
  .catch((err) => console.error('Error:', err));
