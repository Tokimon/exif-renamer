import stringEndSplit from '~/ui/1_globals/utils/stringEndSplit';

export default (path: string) => {
  const name = stringEndSplit(path)[1];
  return name.includes('.') ? name : '';
};