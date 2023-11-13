import { derived } from 'svelte/store';
import type { FileInfo } from '~/types/file.d';
import groupByFileName from '~/ui/1_globals/utils/groupByFileName';
import pathsStore from './pathsStore';

export default derived(pathsStore, (paths: string[], set: (value: FileInfo[]) => void) => {
  set(groupByFileName(paths));
});
