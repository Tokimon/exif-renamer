import stripDuplicateCount from './stripDuplicateCount';

describe('ui/1_globals/utils/stripDuplicateCount', () => {
  test.each([
    ['file_23.png', 'file.png'],
    ['file_23_45_56.png', 'file_23_45.png'],
    ['file_23.some.more.dots.png', 'file.some.more.dots.png'],
    ['file_23.some.more_23.dots.png', 'file_23.some.more.dots.png'],
  ])('Removes only last `_<number>`: "%s" => "%s"', (input, output) => {
    expect(stripDuplicateCount(input)).toBe(output);
  });

  test.each(['/some/path_23/', '_45/_23/', 'root/_23_path/', 'root/dir_34.ext/'])(
    'Only removes `_<number>` from file name, dir: "%s"',
    (root) => {
      expect(stripDuplicateCount(root + 'file_23.png')).toBe(root + 'file.png');
    },
  );

  test('Does not alter string without `_<number>`', () => {
    expect(stripDuplicateCount('file-png')).toBe('file-png');
  });

  test('Does not alter string without `.`', () => {
    expect(stripDuplicateCount('file_23')).toBe('file_23');
  });

  test.each(['_23.png', '_23.file.what.png', 'file._23.what.png'])(
    'Does not remove `_<number>` that is alone between `.`: "%s"',
    (name) => {
      expect(stripDuplicateCount(name)).toBe(name);
    },
  );

  test('`_<number>_<number>.<ext>` => `_<number>.<ext>`', () => {
    expect(stripDuplicateCount('_23_34.png')).toBe('_23.png');
  });
});
