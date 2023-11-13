import { extensions as camera } from '~/shared/extensions/images-camera';
import { extensions as web } from '~/shared/extensions/images-web';
import isWebImage from './isWebImage';

describe('ui/1_globals/utils/fileName', () => {
  test.each(web)('Returns TRUE for file ending in "%s"', (ext) => {
    expect(isWebImage('file.' + ext)).toBe(true);
  });

  test.each(camera)('Returns FALSE for file ending in "%s"', (ext) => {
    expect(isWebImage('file.' + ext)).toBe(false);
  });

  // TODO: This is bad (maybe disable for non DEV environments)
  test('Returns true for paths that includes "http"', () => {
    expect(isWebImage('http')).toBe(true);
  });
});
