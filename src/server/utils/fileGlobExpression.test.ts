import fileGlobExpression from './fileGlobExpression';


const ext = ['gif', 'txt', 'raw', 'psd', 'jpg'];
const unixRoot = 'home/user/me/files';


describe('server/metadata/getFilePaths', () => {
  describe('.fileGlobExpression', () => {
    describe('Returns a glob expression', () => {
      test('Including the given unix root', () => {
        const result = fileGlobExpression(unixRoot, ext);
        expect(result).toMatch(new RegExp(`^${unixRoot}`));
      });

      test('Including the given windows root', () => {
        const winRoot = 'C:\\user\\me again\\files';

        const result = fileGlobExpression(winRoot, ext);
        expect(result).toMatch(new RegExp(`^C:/user/me again/files`));
      });

      test('Including the given extensions', () => {
        const result = fileGlobExpression(unixRoot, ext);
        expect(result).toMatch(new RegExp(`\\*\\.\\{${ext.join(',')}\\}$`));
      });
    });

    describe('Recursive selector (`**`)', () => {
      test('shallow = falsy, adds it', () => {
        const result = fileGlobExpression(unixRoot, ext);
        expect(result.includes('files/**/*.{')).toBe(true);
      });

      test('shallow = true, excludes it', () => {
        const result = fileGlobExpression(unixRoot, ext, true);
        expect(result.includes('files/*.{')).toBe(true);
      });
    });
  });
});
