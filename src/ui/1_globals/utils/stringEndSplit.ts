export default (str: string, char = '/') => {
  const i = str.lastIndexOf(char);
  return [str.substring(0, i), str.substring(i + 1)];
};