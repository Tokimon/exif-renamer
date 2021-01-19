import isWebImage from '~/ui/1_globals/utils/isWebImage';
import type { FileInfo } from '~/types/file.d';

import extensions from '~/shared/supported-extensions.json';



const types = ['animals', 'nature', 'arch', 'people', 'tech'];

export default (): FileInfo[] => extensions.map((ext) => ({
  path: 'some/path with spaces/to-a-file.' + ext,
  count: Math.round(Math.random() * 99),
  thumbnail: isWebImage(ext)
    ? 'https://placeimg.com/150/150/' + types[Math.round(Math.random() * 4)]
    : undefined
}));