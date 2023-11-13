import stringEndSplit from './stringEndSplit';

describe('ui/1_globals/utils/stringEndSplit', () => {
  test('Split string by last found `/`', () => {
    expect(stringEndSplit('some/path/I/guess')).toEqual(['some/path/I', 'guess']);
  });

  test('Second entry is empty if char not found', () => {
    expect(stringEndSplit('some-path-I-guess')).toEqual(['some-path-I-guess', '']);
  });

  test('Splits by given char', () => {
    expect(stringEndSplit('some-path-I-guess', '-')).toEqual(['some-path-I', 'guess']);
  });

  test('Returns 2 empty string if given string is empty', () => {
    expect(stringEndSplit('')).toEqual(['', '']);
  });
});
