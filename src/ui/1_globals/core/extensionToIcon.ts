import audioExt from '~/shared/extensions/audio';
import bookExt from '~/shared/extensions/book';
import codeExt from '~/shared/extensions/code';
import dataExt from '~/shared/extensions/data';
import imgCameraExt from '~/shared/extensions/images-camera';
import imgOtherExt from '~/shared/extensions/images-other';
import imgWebExt from '~/shared/extensions/images-web';
import vectorExt from '~/shared/extensions/vector';
import videoExt from '~/shared/extensions/video';
import settingsExt from '~/shared/extensions/settings';




export default (ext: string): string | undefined => {
  if (imgWebExt.has(ext) || imgOtherExt.has(ext)) { return 'image-square'; }
  if (videoExt.has(ext)) { return 'play-circle'; }
  if (imgCameraExt.has(ext)) { return 'camera-roll'; }
  if (audioExt.has(ext)) { return 'music-note'; }
  if (vectorExt.has(ext)) { return 'shape'; }
  if (bookExt.has(ext)) { return 'book'; }
  if (codeExt.has(ext)) { return 'code'; }
  if (dataExt.has(ext)) { return 'server'; }
  if (settingsExt.has(ext)) { return 'dials'; }

  return;
};