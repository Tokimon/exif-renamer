import exifToolExe from 'dist-exiftool';
import exifTool from 'node-exiftool';

let _exifProcess;

export default () => {
  if (!_exifProcess) {
    _exifProcess = new exifTool.ExiftoolProcess(exifToolExe);
  }

  return _exifProcess;
};
