import type { PathMapping } from '~/types/path.d';



export default (paths: string[]): PathMapping => {
  const mapping = paths.reduce(
    (m, path) => {
      const root = path.replace(/_\d+$/, '');
      m.set(root, (m.get(root) || 0) + 1);
      return m;
    },
    new Map() as Map<string, number>
  );

  return Array.from(mapping.entries());
};
