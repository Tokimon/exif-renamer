// import { derived } from 'svelte/store';
// import type { FileInfo } from '~/types/file.d';
// import groupByFileName from '~/ui/1_globals/utils/groupByFileName';
// import pathsStore from './pathsStore';
import { writable } from 'svelte/store';
import type { FileInfo } from '~/types/file';

export const fileInfoStore = writable<FileInfo[]>([]);
export const selectedFileStore = writable<Set<string>>(new Set());

// export default derived(pathsStore, (paths: string[], set: (value: FileInfo[]) => void) => {
//   set(groupByFileName(paths));
// });
