import glob from 'globby';

import type { FindFilesAction } from '~/types/serverActions.d';

import xmpExtensions from '~/shared/extensions/jsons/xmp-extensions.json';

import fileGlobExpression from '~/server/utils/fileGlobExpression';



const findFiles: FindFilesAction = (
  directory,
  extensions = xmpExtensions,
  shallow
) => glob(fileGlobExpression(directory, extensions, shallow));

export default findFiles;