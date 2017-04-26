/* eslint-disable no-console */

const co = require('co');
const yargs = require('yargs');
const nPath = require('path');
const glob = require('glob-promise');
const fs = require('fs-promise');
const chalk = require('chalk');
const moment = require('moment');
const Progress = require('progress');

const events = require('./events');
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
  .help()
  .alias('help', 'h')
  .argv;



const { register, trigger, START, FINISH, LOADING_FILES, FILES_FOUND, FOLDER, FILE_RENAMED, FILE_SKIPPED, NO_FILES, ERROR } = events;

let completed = [];
let skipped = [];
let errors = [];
let total = 0;
let ProgressBar;

function advanceProgress() {
  ProgressBar && ProgressBar.tick({
    completed: chalk.green(completed.length),
    skipped: chalk.gray(skipped.length),
    errored: chalk.red(errors.length)
  });
}

register(LOADING_FILES, () => {
  console.log(chalk.blue('Renaming files using format:'), args.format);
});

register(FILES_FOUND, (data) => {
  console.log(chalk.gray(`${data.total} files found \n`));
  ProgressBar = new Progress(':bar :current/:total (:completed :skipped :errored)', {
    total: data.total,
    complete: '\u2588',
    incomplete: ' '
  });
});

register(FOLDER, (data) => {
  ProgressBar.interrupt(chalk.cyan(data.folder));
});

register(FILE_RENAMED, (data) => {
  completed.push(data);
  advanceProgress();
});

register(FILE_SKIPPED, (data) => {
  skipped.push(data);
  advanceProgress();
});

register(START, () => {
  // console.log(chalk.magenta('Renaming files\n'));
});

register(FINISH, () => {
  console.log(chalk.green('\nDone!'));
  errors.forEach((err) => console.error(err.toString(), err.stack || '', '\n\n'));
});

register(NO_FILES, () => {
  console.log('No files to rename...');
});

register(ERROR, (err) => {
  errors.push(err);
  advanceProgress();
});



const dateFormatExp = args.format
  .replace(/([YMDHs]+)/g, '\\d+')
  .replace(/m+/g, (match) => match.length < 3 ? '\\d+' : '\\s+');

const dateExp = new RegExp(`^${dateFormatExp}\\.\\w+$`);



function *renameFile(filename, list) {
  const fileData = list.get(filename);
  if(
    dateExp.test(filename) &&
    fileData.basename === filename
  ) { return trigger(FILE_SKIPPED, fileData); }

  const date = yield fileDate(fileData.file);

  const { dir, ext } = nPath.parse(fileData.file);
  const datename = moment(date).format(args.format);
  let duplicateCount = 0;

  let name = `${datename}${ext}`;
  while(list.has(name)) { name = `${datename}_${++duplicateCount}${ext}`; }

  fileData.newpath = nPath.join(dir, name);
  list.delete(filename);
  list.set(name, fileData);

  yield fs.rename(fileData.file, fileData.newpath);

  trigger(FILE_RENAMED, fileData);
}

function rename(list) {
  const renames = [...list.keys()]
    .map((filename) => co(renameFile(filename, list)));

  return Promise.all(renames);
}



module.exports = function *renamer(root) {
  trigger(LOADING_FILES);

  yield exifProcess().open();

  try {
    const extensions = args.ext || supportedExt.extensions;
    const ext = extensions
      .map((e) => e.toLowerCase())
      .filter((e) => supportedExt.extensions.includes(e));

    if(ext.length < extensions.length) {
      trigger(IGNORED_EXT, { ext: extensions.filter((e) => !ext.includes(e)) });
    }

    const path = nPath.join(root, `/**/*.${supportedExt.glob(ext)}`);
    const files = yield glob(path);
    const total = files.length;

    trigger(FILES_FOUND, { total });

    if(total) {
      trigger(START);

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
            trigger(FOLDER, { folder });
            return rename(fileMap.get(folder));
          })
        );
      }

      trigger(FINISH);
    } else {
      trigger(NO_FILES);
    }
  } catch(ex) {
    trigger(ERROR, ex);
  }

  exifProcess().close();
};
