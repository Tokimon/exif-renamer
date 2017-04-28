/* eslint-disable no-console */

const co = require('co');
const yargs = require('yargs');
const nPath = require('path');
const glob = require('glob-promise');
const fs = require('fs-promise');
const chalk = require('chalk');
const moment = require('moment');
const Progress = require('progress');

const exifProcess = require('./exifProcess');
const supportedExt = require('./supportedExtensions');
const fileDate = require('./fileDate');

const args = yargs
  .option('local', {
    type: 'boolean',
    alias: 'l',
    description: 'Compare names locally instead of globally (relative to the current path)'
  })
  .option('ext', {
    type: 'array',
    describe: 'Extension to search for'
  })
  .option('format', {
    alias: 'f',
    describe: 'Date format expressions eg: "YYYY-MM-DD_HH-mm-ss"',
    default: 'YYYY-MM-DD_HH-mm-ss'
  })
  .option('dry', {
    type: 'boolean',
    alias: 'd',
    describe: 'Don\'t perform any file system changes'
  })
  .option('recursive', {
    type: 'boolean',
    alias: 'r',
    describe: 'Search files in all nested diretories'
  })
  .help()
  .alias('help', 'h')
  .argv;


let completed = [];
let skipped = [];
let errors = [];
let ProgressBar;

function advanceProgress() {
  ProgressBar && ProgressBar.tick({
    completed: chalk.green(completed.length),
    skipped: chalk.gray(skipped.length),
    errored: chalk.red(errors.length)
  });
}

function loadingFiles() {
  console.log(chalk.blue('Renaming files using format:'), args.format);
}

function filesFound(data) {
  console.log(chalk.gray(`${data.total} files found \n`));
  ProgressBar = new Progress(`${chalk.cyan('Renaming files')} :bar :current/:total (:completed :skipped :errored)`, {
    total: data.total,
    complete: '\u2588',
    incomplete: ' '
  });
}

function handlingFolder(data) {
  ProgressBar.interrupt(chalk.cyan(data.folder));
}

function fileRenamed(data) {
  completed.push(data);
  advanceProgress();
}

function fileSkipped(data) {
  skipped.push(data);
  advanceProgress();
}

function done() {
  console.log(chalk.green(args.dry ? '\nDry run done!' : '\nDone!'));
  errors.forEach((err) => console.error(err.toString(), err.stack || '', '\n\n'));
}

function noFiles() {
  console.log('No files found to rename...');
}

function addError(err) {
  errors.push(err);
  advanceProgress();
}



const dateFormatExp = args.format
  .replace(/([YMDHs]+)/g, '\\d+')
  .replace(/m+/g, (match) => match.length < 3 ? '\\d+' : '\\s+');

const dateExp = new RegExp(`^${dateFormatExp}\\.\\w+$`);



function *renameFile(filename, list) {
  const fileData = list.get(filename);
  if(
    dateExp.test(filename) &&
    fileData.basename === filename
  ) { return fileSkipped(fileData); }

  try {
    const date = yield fileDate(fileData.file);

    const { dir, ext } = nPath.parse(fileData.file);
    const datename = moment(date).format(args.format);
    let duplicateCount = 0;

    let name = `${datename}${ext}`;
    while(list.has(name)) { name = `${datename}_${++duplicateCount}${ext}`; }

    fileData.newpath = nPath.join(dir, name);
    list.delete(filename);
    list.set(name, fileData);

    if(!args.dry) {
      yield fs.rename(fileData.file, fileData.newpath);
    }

    fileRenamed(fileData);
  } catch(ex) {
    addError(ex);
  }
}

function rename(list) {
  const renames = [...list.keys()]
    .map((filename) => co(renameFile(filename, list)));

  return Promise.all(renames);
}



module.exports = function *renamer(root) {
  loadingFiles();

  yield exifProcess().open();

  try {
    const extensions = args.ext || supportedExt.extensions;
    const ext = extensions
      .map((e) => e.toLowerCase())
      .filter((e) => supportedExt.extensions.includes(e));

    const path = nPath.join(root, args.recursive ? '**/' : '', `*.${supportedExt.glob(ext)}`);
    let files = yield glob(path);
    files = files.filter((file) => !/\/__duplets\//.test(file));

    const total = files.length;

    filesFound({ total });

    if(total) {
      if(!args.local) {
        const fileMap = files.reduce((map, file) => {
          const basename = nPath.basename(file);
          let filename = basename;
          let count = 0;

          while(map.has(filename)) { filename = `${basename}#${++count}`; }

          map.set(filename, { file, filename, basename, newpath: null });

          return map;
        }, new Map());

        yield rename(fileMap);
      } else {
        const fileMap = files.reduce((map, file) => {
          const folder = nPath.dirname(file);
          const folderFiles = map.get(folder) || new Map();
          const filename = nPath.basename(file);

          folderFiles.set(filename, { file, filename, basename: filename, newpath: null });
          map.set(folder, folderFiles);

          return map;
        }, new Map());

        yield Promise.all(
          [...fileMap.keys()].map((folder) => {
            handlingFolder({ folder });
            return rename(fileMap.get(folder));
          })
        );
      }

      done();
    } else {
      noFiles();
    }
  } catch(ex) {
    addError(ex);
  }

  exifProcess().close();
};
