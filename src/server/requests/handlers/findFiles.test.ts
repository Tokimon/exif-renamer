import glob from 'globby';
import { mocked } from 'ts-jest/utils';

import xmpExtensions from '~/shared/extensions/jsons/xmp-extensions.json';
import fileGlobExpression from '~/server/utils/fileGlobExpression';

import findFiles from './findFiles';

jest.mock('globby', () => jest.fn());



const mockedGlob = mocked(glob);
mockedGlob.mockReturnValue(Promise.resolve([]));


describe('server/requests/handlers/findFiles', () => {
  beforeEach(() => {
    mocked(mockedGlob).mockClear();
  });

  test('Finds the files from the given folder', async () => {
    await findFiles('root');

    expect(mockedGlob).toHaveBeenCalledWith(
      fileGlobExpression('root', xmpExtensions)
    );
  });

  test('Finds only files with the given extensions', async () => {
    const ext = ['png', 'jpg', 'gif', 'webp'];
    await findFiles('root', ext);

    expect(mockedGlob).toHaveBeenCalledWith(
      fileGlobExpression('root', ext)
    );
  });

  test('`shallow` = true, finds files at the given root only', async () => {
    const ext = ['png', 'jpg', 'gif', 'webp'];
    await findFiles('root', ext, true);

    expect(mockedGlob).toHaveBeenCalledWith(
      fileGlobExpression('root', ext, true)
    );
  });
});
