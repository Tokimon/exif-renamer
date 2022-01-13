import fileExtension from './fileExtension';



describe('ui/1_globals/utils/fileExtension', () => {
  test('Extracts extension from file name', () => {
    expect(fileExtension('file.png')).toBe('png');
  });

  test('Extracts extension from full path', () => {
    expect(fileExtension('/my/path/to/file.png')).toBe('png');
  });

  test('Extracts extension when there are multiple `.`', () => {
    expect(fileExtension('/my/path/to/file.with.more.dots.png')).toBe('png');
  });

  test('returns empty if there are no `.`', () => {
    expect(fileExtension('/my/path/to/file')).toBe('');
  });
});