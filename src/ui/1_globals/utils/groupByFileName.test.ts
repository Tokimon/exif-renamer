import type { FileInfo } from '~/types/file.d';
import groupByFileName from './groupByFileName';



describe('shared/utils/groupByFileName', () => {
  const _prop = (prop: keyof FileInfo) =>
    (paths: string[]) => groupByFileName(paths).map((i) => i[prop]);



  describe('.name', () => {
    // Helper
    const _names = _prop('name');

    // Tests
    test('Group files with the same name', () => {
      const paths = [
        'path 0/file.png',
        'path 1/file.png',
        'path 2/file.png',
      ];

      expect(_names(paths)).toEqual(['file.png']);
    });

    test('Entries are sorted by name alphabetically', () => {
      const paths = [
        'path 0/file.png',
        'path 0/another.png',
        'path 0/third.png',
      ];

      expect(_names(paths)).toEqual(['another.png', 'file.png', 'third.png']);
    });

    test('When grouping it ignores any `_<number>` endings', () => {
      const paths = [
        'path 0/file.png',
        'path 0/file_1.png',
        'path 0/file_2.png',
      ];

      expect(_names(paths)).toEqual(['file.png']);
    });

    test('Only files with same extensions are grouped', () => {
      const paths = [
        'path 0/file.png',
        'path 0/file.gif',
        'path 0/file.jpg',
      ];

      expect(_names(paths)).toEqual(['file.gif', 'file.jpg', 'file.png']);
    });
  });

  describe('.count', () => {
    // Helper
    const _count = _prop('count');

    // Tests
    test('Counts the number of files with the same name', () => {
      const paths = [
        'path 0/file.png',
        'path 1/file.png',
        'path 2/file.png',
      ];

      expect(_count(paths)).toEqual([3]);
    });

    test('Indicates the correct number of files for each group', () => {
      const paths = [
        'path 1/another.png',
        'path 2/another.png',

        'path 0/file.png',
        'path 1/file.png',
        'path 2/file.png',

        'path 1/final.png',
      ];

      expect(_count(paths)).toEqual([2, 3, 1]);
    });
  });

  describe('.paths', () => {
    // Helper
    const _paths = _prop('paths');

    // Tests
    test('Keeps a list of paths for the grouped files', () => {
      const paths = [
        'path 1/another.png',
        'path 2/another.png',

        'path 0/file.png',
        'path 1/file.png',
        'path 2/file.png',

        '1/final.png',
      ];

      expect(_paths(paths)).toEqual([
        paths.slice(0, 2),
        paths.slice(2, 5),
        paths.slice(5),
      ]);
    });

    test('Paths for each group is sorted alphabetically', () => {
      const paths = [
        'path 2/another.png',
        'path 1/another.png',

        'path 1/file.png',
        'path 2/file.png',
        'path 0/file.png',

        'path 0/final.png',
        'path 2/final.png',
        'path 1/final.png',
      ];

      expect(_paths(paths)).toEqual([
        [
          'path 1/another.png',
          'path 2/another.png',
        ],

        [
          'path 0/file.png',
          'path 1/file.png',
          'path 2/file.png',
        ],

        [
          'path 0/final.png',
          'path 1/final.png',
          'path 2/final.png',
        ]
      ]);
    });
  });
});
