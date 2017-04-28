/* eslint-disable no-console */

const nPath = require('path');
const co = require('co');
const fs = require('fs-promise');
const glob = require('glob-promise');
const md5 = require('md5-file/promise');
const yargs = require('yargs');
const Progress = require('progress');
const chalk = require('chalk');

const supportedExt = require('./supportedExtensions');

const args = yargs
  .option('local', {
    type: 'boolean',
    alias: 'l',
    description: 'Compare names locally instead of globally (relative to the current path)'
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

function startProgress(total) {
  console.log(chalk.gray(`${total} duplets found \n`));
  ProgressBar = new Progress(`${chalk.cyan('Removing douplets')} :bar :current/:total (:completed :skipped :errored)`, {
    total,
    complete: '\u2588',
    incomplete: ' '
  });
}



function done() {
  console.log(chalk.green(args.dry ? '\nDry run done!' : '\nDone!'));
  errors.forEach((err) => console.error(err.toString(), err.stack || '', '\n\n'));
}

function noFiles() {
  console.log('No doublets found...');
}

function addError(err) {
  errors.push(err);
  advanceProgress();
}



const mainFileMap = new Map();

function getMainFileHash(file, root) {
  let mainFile = file.replace(/_\d+(\.[a-z0-9]+)$/, '$1');

  if(!args.local) {
    mainFile = nPath.join(root, nPath.basename(mainFile));
  }

  return mainFileMap.has(mainFile)
    ? Promise.resolve(mainFileMap.get(mainFile))
    : md5(mainFile).then((hash) => {
      mainFileMap.set(mainFile, hash);
      return hash;
    });
}

function *moveFile(file, root) {
  try {
    const mainHash = yield getMainFileHash(file, root);
    const hash = yield md5(file);

    if(mainHash !== hash) {
      skipped.push(file);
      advanceProgress();
      return;
    }

    if(!args.dry) {
      const dupletsFolder = nPath.join(args.local ? nPath.dirname(file) : root, '__duplets');
      const destFile = nPath.join(dupletsFolder, nPath.basename(file));
      yield fs.move(file, destFile, { overwrite: true });
    }

    completed.push(file);
    advanceProgress();
  } catch(ex) {
    addError(ex);
  }
}



module.exports = function *removeDublets(root) {
  let files = yield glob(nPath.resolve(root, args.recursive ? '**/' : '', `*_+([0-9]).${supportedExt.glob()}`));
  files = files.filter((file) => !/\/__duplets\//.test(file));

  if(!files.length) { return noFiles(); }

  startProgress(files.length);

  yield Promise.all(files.map((file) => co(moveFile(file, root))));

  done();
};
