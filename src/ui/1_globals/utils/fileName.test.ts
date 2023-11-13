import fileName from './fileName';

describe('ui/1_globals/utils/fileName', () => {
  test('Extracts file name from path', () => {
    expect(fileName('/some/path/file.png')).toBe('file.png');
  });

  test('Extracts file name when there are multiple `.`', () => {
    expect(fileName('/my/path/to/file.with.more.dots.png')).toBe('file.with.more.dots.png');
  });

  test('Returns empty when there are no file extension', () => {
    expect(fileName('/my/path/to/file')).toBe('');
  });

  test('Returns empty when path is empty', () => {
    expect(fileName('')).toBe('');
  });
});
