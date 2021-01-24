import uniqueArray from 'vanillajs-helpers/ts/uniqueArray';

import type { FindFilesAction } from '~/types/serverActions.d';

import xmpExtensions from '~/shared/extensions/jsons/xmp-extensions.json';
import getFilePaths from '~/server/metadata/getFilePaths';



const findFiles: FindFilesAction = async (
  directory: string,
  extensions: string[] = xmpExtensions
) => {
  const files = await getFilePaths(directory, extensions);
  return uniqueArray(files);
};

export default findFiles;