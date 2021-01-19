const videoExt = new Set([
  '3g2', '3gp2', '3gp', '3gpp', 'f4p', 'f4v', 'm4v', 'mov', 'qt', 'mp4', 'mqv'
]);

const imgExt = new Set([
  'arw', 'ciff', 'fff', 'flif', 'gif', 'wdp', 'jxr', 'iiq', 'jp2', 'jpf', 'jpm',
  'jpx', 'jpeg', 'jpg', 'jpe', 'mef', 'mos', 'mpo', 'mrw', 'nef', 'nrw', 'orf',
  'png', 'jng', 'mng', 'psd', 'psb', 'qtif', 'qti', 'raf', 'raw', 'rw2', 'rwl',
  'sr2', 'srw', 'thm', 'tiff', 'tif', 'x3f'
]);

const audioExt = new Set([
  'aax', 'cr2', 'crw', 'cs1', 'f4a', 'fff', 'hdp', 'm4a', 'm4b', 'm4p'
]);

const vectorExt = new Set(['eps', 'epsf', 'indd', 'indt']);

const bookExt = new Set(['f4b', 'pef', 'pdf']);

const dataExt = new Set(['dng', 'dvb', 'erf', 'ind', 'mie', 'mng', 'qif', 'vrd', 'xmp']);

const settingsExt = new Set(['dcp', 'ps', 'exv', 'psdt']);




export default (ext: string): string | null => {
  if (videoExt.has(ext)) { return 'play-circle'; }
  if (imgExt.has(ext)) { return 'image-square'; }
  if (audioExt.has(ext)) { return 'music-note'; }
  if (vectorExt.has(ext)) { return 'shape'; }
  if (bookExt.has(ext)) { return 'book'; }
  if (dataExt.has(ext)) { return 'server'; }
  if (settingsExt.has(ext)) { return 'dials'; }

  return null;
};