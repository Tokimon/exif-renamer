import exifTool from 'node-exiftool';
import exifToolExe from 'dist-exiftool';

let _exifProcess;

export default () => {
  if (!_exifProcess) {
    _exifProcess = new exifTool.ExiftoolProcess(exifToolExe);
  }

  return _exifProcess;
};
