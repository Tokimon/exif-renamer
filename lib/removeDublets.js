const nPath = require('path');
const co = require('co');
const fs = require('fs-promise');
const glob = require('glob-promise');
const md5 = require('md5-file/promise');

const supportedExt = require('./supportedExtensions');

const mainFileMap = new Map();

function getMainFileHash(file) {
  const mainFile = file.replace(/_\d+(\.[a-z0-9]+)$/, '$1');
  return mainFileMap.has(mainFile)
    ? Promise.resolve(mainFileMap.get(mainFile))
    : md5(mainFile).then((hash) => {
      mainFileMap.set(mainFile, hash);
      return hash;
    });
}

function *compareToMainFile(file) {
  try {
    const mainHash = yield getMainFileHash(file);
    const hash = yield md5(file);
    return mainHash === hash ? file : null;
  } catch(ex) {
    return null;
  }
}

module.exports = function *removeDublets(root) {
  const files = yield glob(nPath.resolve(root, `**/*_+([0-9]).${supportedExt.glob()}`));

  const filesToRemove = yield Promise.all(
    files
      .filter((file) => !/\/__duplets\//.test(file))
      .map((file) => co(compareToMainFile(file)))
  );

  return Promise.all(
    filesToRemove
      .filter((file) => !!file)
      .map((file) => {
        const destFile = nPath.join(nPath.dirname(file), '__duplets', nPath.basename(file));
        return fs.move(file, destFile, { overwrite: true });
      })
  );
};
