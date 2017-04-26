const exifTool = require('node-exiftool');
const exifToolExe = require('dist-exiftool');

let _exifProcess;

module.exports = function exifProcess() {
  if(!_exifProcess) {
    _exifProcess = new exifTool.ExiftoolProcess(exifToolExe);
  }

  return _exifProcess;
};
