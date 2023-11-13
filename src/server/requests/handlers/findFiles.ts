import { globby } from 'globby';
import fileGlobExpression from '~/server/utils/fileGlobExpression';
import xmpExtensions from '~/shared/extensions/jsons/xmp-extensions.json';

const findFiles = (directory: string, extensions: string[] = xmpExtensions, shallow?: boolean) =>
  globby(fileGlobExpression(directory, extensions, shallow));

export default findFiles;
