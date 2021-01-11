import uniqueArray from 'vanillajs-helpers/ts/uniqueArray';

import type { FindFilesAction } from '~/types/serverActions.d';

import getSupportedFiles from '~/server/exif/getSupportedFiles';



const findFiles: FindFilesAction = async (directory: string) => {
  const files = await getSupportedFiles(directory);
  return uniqueArray(files);
};

export default findFiles;