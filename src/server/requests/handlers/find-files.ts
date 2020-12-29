
import { dialog } from 'electron';
import uniqueArray from 'vanillajs-helpers/ts/uniqueArray';

import type { FindFilesAction } from '~/types/serverActions.d';

import getSupportedFiles from '~/server/exif/getSupportedFiles';



const findFiles: FindFilesAction = async () => {
  const { canceled, filePaths } = await dialog.showOpenDialog({
    properties: ['openDirectory']
  });

  if (canceled) { return null; }

  const files = await getSupportedFiles(filePaths);

  return uniqueArray(files);
};

export default findFiles;