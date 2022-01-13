import { globby } from 'globby';

import xmpExtensions from '~/shared/extensions/jsons/xmp-extensions.json';

import fileGlobExpression from '~/server/utils/fileGlobExpression';

const findFiles = (
  directory: string,
  extensions: string[] = xmpExtensions,
  shallow?: boolean
) => globby(fileGlobExpression(directory, extensions, shallow));

export default findFiles;
