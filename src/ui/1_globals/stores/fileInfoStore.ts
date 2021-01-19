import { derived } from 'svelte/store';

import type { FileInfo } from '~/types/file.d';
import mapPaths from '~/server/utils/mapPaths';

import pathsStore from './pathsStore';

export default derived(
  pathsStore,
  (paths: string[], set: (value: FileInfo[]) => void) => {
    set(mapPaths(paths));
  }
);
