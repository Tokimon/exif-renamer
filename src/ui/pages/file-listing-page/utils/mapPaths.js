export default (paths) => {
  const mapping = paths.reduce(
    (m, path) => {
      const root = path.replace(/_\d+$/, '');
      m.set(root, (m.get(root) || 0) + 1);
      return m;
    },
    new Map()
  );

  return Array.from(mapping.entries());
};
