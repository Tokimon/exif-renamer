import fileExtension from '~/ui/1_globals/utils/fileExtension';

const webImageExt = new Set(['apng', 'avif', 'bmp', 'gif', 'ico', 'jpeg', 'jpg', 'png', 'svg', 'tif', 'tiff', 'webp', 'xmb']);

export default (path: string) =>
  path.startsWith('http') ||
  webImageExt.has(fileExtension(path));