'use strict';

/* global Buffer */

import fs from 'fs';
import n_path from 'path';
import cmdArgs from 'command-line-args';

import imageDatas, { find } from './read';

function newName(imagedata) {
  const datename = moment(imagedata.meta.createDate, args.name);
  return uniqueName(datename, imagedata.meta.fileTypeExtension, n_path.dirname(imagedata.path));
}

function uniqueName(name, ext, dir) {
  find(n_path.join(dir, `${name}?(_+([0-9]))${ext}`)).then((files) => {
    const num = files.reduce((num, file) => {
      const m = /_(\d+)\.[^.]+$/g.exec(file);
      return Math.max((!m ? 0 : Number(m[1])) + 1, num);
    }, 0);

    name += num > 0 ? '_'+ num : '';
    return n_path.join(dir, `${name}${ext}`)
  });
}

function readFile(file) {
  return new Promise((resolve, reject) => fs.readFile(file, (err, data) => resolve(err ? null : data)));
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
  { name: 'name', alias: 'n', type: String, defaulValue: 'yyyy-MM-DD-hh-mm-ss' },
  { name: 'exp', type: String, defaulValue: '^\d{4}(-\d\d){5}' },
  { name: 'ext', type: String, multiple: true, defaultValue: ['jpg', 'jpeg', 'png'] }
]).parse();

// Get all files in the designated folder (with the specified extension)
imageDatas(n_path.join(args.path, `/**/*.(${args.ext.join('|')})`))
  // Filter out images that have allready been renamed
  .then((images) => images.filter((image) => !(new RegExp(args.exp)).test(n_path.basename(image))))
  // Rename images
  .then((images) => Promise.all(
    images.map((image) => newName(image).then((newname) => {
      fs.renameSync(image.path, newname);
      return newname;
    }))
  ))
  // Delete duplicates (unless indicated not to)
  .then((images) => !args.keepduplets ? removeDuplets(images) : images)
  // Indicate that the process is done
  .then(() => console.log('Done!'));
