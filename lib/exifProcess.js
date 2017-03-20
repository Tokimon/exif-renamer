const exifTool = require('node-exiftool');
const exifToolExe = require('dist-exiftool');

let _exifProcess;

module.exports = function exifProcess() {
  if(!_exifProcess) {
    _exifProcess = new exifTool.ExiftoolProcess(exifToolExe);

    _exifProcess
      .on(exifTool.events.OPEN, (pid) => {
        console.log('Started exiftool process %s', pid);
      });

    _exifProcess
      .on(exifTool.events.EXIT, () => {
        console.log('exiftool process exited');
      });
  }

  return _exifProcess;
};
