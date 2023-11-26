import extensions from '~/shared/extensions/jsons/xmp-extensions.json';
import type { FileInfo } from '~/types/file.d';
import isWebImage from '~/ui/1_globals/utils/isWebImage';

export default (): FileInfo[] =>
  extensions.map((ext) => {
    const name = 'to-a-file.' + ext;

    return {
      name,
      count: Math.round(Math.random() * 99),
      paths: [`path/to/${name}`],
      thumbnail: isWebImage(name) ? 'https://placekitten.com/150/' + (120 + Math.round(Math.random() * 30)) : undefined,
    };
  });
