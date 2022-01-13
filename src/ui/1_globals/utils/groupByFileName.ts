import type { FileInfo } from '~/types/file.d';

import fileName from './fileName';
import stripDuplicateCount from './stripDuplicateCount';


export default (paths: string[]): FileInfo[] => {
  const m: Map<string, FileInfo> = new Map();

  for (const path of paths) {
    const name = stripDuplicateCount(fileName(path));
    const curr = m.get(name);

    if (!curr) {
      m.set(name, { name, count: 1, paths: [path] });
    } else {
      curr.count++;
      curr.paths.push(path);
    }
  }

  const groups = Array.from(m.values())
    .sort(
      (a, b) =>
        a.name > b.name
          ? 1
          : a.name === b.name ? 0 : -1
    );

  groups.forEach(({ count, paths }) => {
    count > 1 && paths.sort();
  });

  return groups;
};
