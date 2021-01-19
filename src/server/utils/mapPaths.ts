import type { FileInfo } from '~/types/file.d';



export default (paths: string[]): FileInfo[] => {
  const mapping = paths.reduce(
    (m, path) => {
      const root = path.replace(/_\d+$/, '');
      const curr = m.get(root);
      const count = curr?.count ?? 0;

      m.set(root, { path, count: count + 1 });

      return m;
    },
    new Map() as Map<string, FileInfo>
  );

  return Array.from(mapping.values());
};
