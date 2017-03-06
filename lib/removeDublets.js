const nPath = require('path');
const co = require('co');
const fs = require('fs-promise');
const glob = require('glob-promise');

const mainFileMap = new Map();

function *compareToMainFile(file) {
  const mainFile = file.replace(/_\d+(\.[a-z0-9]+)$/, '$1');
  const fileBuffer = yield fs.readFile(file);

  const mainFileBuffer = mainFileMap.has(mainFile)
    ? mainFileMap.get(mainFile)
    : yield fs.readFile(mainFile)
      .then((buffer) => {
        mainFileMap.set(mainFile, buffer);
        return buffer;
      });

  return mainFileBuffer.compare(fileBuffer) ? file : null;
}

module.exports = function *removeDublets() {
  const files = yield glob(nPath.resolve('**/*_*.*'));

  const filesToRemove = yield Promise.all(
    files
      .filter((file) => /_\d+\.[a-z0-9]+$/.test(file))
      .map((file) => co(compareToMainFile(file)))
  );

  return Promise.all(
    filesToRemove
      .filter((file) => !!file)
      .map((file) => {
        const dir = nPath.dirname(file);
        return fs.move(file, nPath.join(dir, '__duplets', nPath.basename(file)));
      })
  );
};
