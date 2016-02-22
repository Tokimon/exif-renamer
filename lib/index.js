import fs from 'fs';
import n_path from 'path';
import cmdArgs from 'command-line-args';

import imageDatas from './read';
import duplicates from './duplicates';

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
    checkName(name, ext, dir, num++);
  } catch(ex) { return path; }
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
  .then((images) => images.filter((image) => !(new RegExp(args.exp)).test(image)))
  // Rename images
  .then((images) => Promise.all(images.map((image) => fs.renameSync(image.path, newName(image)))))
  // Delete duplicates (unless indicated not to)
  .then((images) => !args.keepduplets ? duplicates(args) : images)
  // Indicate that the process is done
  .then(() => console.log('Done!'));
