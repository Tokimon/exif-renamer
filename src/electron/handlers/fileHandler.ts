import glob from 'globby';

import uniqueArray from 'vanillajs-helpers/ts/uniqueArray';



export const findFiles = async (...paths: string[]): Promise<string[]> => {
  const files = await glob(paths);
  return uniqueArray(files);
};
