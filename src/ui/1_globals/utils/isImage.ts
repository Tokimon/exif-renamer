import imgCameraExt from '~/shared/extensions/images-camera';
import imgOtherExt from '~/shared/extensions/images-other';
import imgWebExt from '~/shared/extensions/images-web';
import fileExtension from '~/ui/1_globals/utils/fileExtension';

export default (path: string) => {
  const ext = fileExtension(path);
  return imgWebExt.has(ext) || imgOtherExt.has(ext) || imgCameraExt.has(ext);
};
