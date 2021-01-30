export default (str: string, char = '/'): [string, string] => {
  if (!str.includes(char)) { return [str, '']; }

  const parts = str.split(char);
  const last = parts.pop() || '';

  return [parts.join(char), last];
};