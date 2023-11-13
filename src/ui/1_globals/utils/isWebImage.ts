import imageWebExtensions from '~/shared/extensions/images-web';
import fileExtension from '~/ui/1_globals/utils/fileExtension';

export default (path: string) => path.startsWith('http') || imageWebExtensions.has(fileExtension(path));
