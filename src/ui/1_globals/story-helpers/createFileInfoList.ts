import isWebImage from '~/ui/1_globals/utils/isWebImage';
import type { FileInfo } from '~/types/file.d';

import extensions from '~/shared/extensions/jsons/xmp-extensions.json';



const types = ['animals', 'nature', 'arch', 'people', 'tech'];

export default (): FileInfo[] => extensions.map((ext) => {
  const name = 'to-a-file.' + ext;

  return {
    name,
    count: Math.round(Math.random() * 99),
    paths: [],
    thumbnail: isWebImage(name)
      ? 'https://placeimg.com/150/150/' + types[Math.round(Math.random() * 4)]
      : undefined
  };
});