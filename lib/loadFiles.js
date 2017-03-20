const nPath = require('path');
const glob = require('glob-promise');

const supportedExt = require('./supportedExtensions');

/**
 * Load and map folder files
 * @param {String} root - from where to start the search
 * @return {Map} - Mapping of the files
 */
module.exports = function *loadFiles(root, extensions = supportedExt.extensions) {
  const files = yield glob(nPath.join(root, `/**/*.${supportedExt.glob(extensions)}`));

  return files.reduce((map, file) => {
    const folder = nPath.dirname(file);
    const fileList = map.get(folder) || new Set();

    fileList.add(nPath.basename(file));
    map.set(folder, fileList);

    return map;
  }, new Map());
};
