'use strict';

import fs from 'fs';
import n_path from 'path';
import cmdArgs from 'command-line-args';

import imageDatas from './read';

function newName(imagedata) {
  const datename = moment(imagedata.meta.createDate, args.name);
  return uniqueName(datename, imagedata.meta.fileTypeExtension, n_path.dirname(imagedata.path));
}

function uniqueName(name, ext, dir, num=0) {
  if(num > 0) { name += '_'+ num; }
  const path = n_path.join(dir, `${name}${ext}`);

  // Check if the file exists. If it do try another name. Otherwise return the new path.
  try {
    fs.accessSync(path, fs.F_OK);
    uniqueName(name, ext, dir, ++num);
  } catch(ex) { return path; }
}

function readFile(file) {
  return new Promise((resolve, reject) => fs.readFile(file, (err, data) => resolve(err ? null : data)));
}

function removeDuplets(images) {
  images = images.map((file) => {
    const m = /_\d+(\.[^.]+)$/i.exec(file);
    if(!m) { return null; }

    // Read current duplet file and the original, to compare their content
    return Promise.all([
      readFile(file),
      readFile(file.replace(m[0], m[1]))
    ])
      // If they match (or either doesn't exist) return the path for it to be deleted
      .then((datas) => {
        const [file1, file2] = datas;
        return !file1 || !file2 || file1 === file2 ? file : null;
      });
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
  .then((images) => images.map((image) => {
    const name = newName(image);
    fs.renameSync(image.path, name);
    return name;
  }))
  // Delete duplicates (unless indicated not to)
  .then((images) => !args.keepduplets ? removeDuplets(images) : images)
  // Indicate that the process is done
  .then(() => console.log('Done!'));
