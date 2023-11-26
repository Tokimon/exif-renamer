// import { derived } from 'svelte/store';
// import { getActions } from '~/ui/1_globals/core/serverActions';
// import directoryStore from './directoryStore';
// export default derived(directoryStore, (directory: string, set: (value: string[]) => void) => {
//   if (!directory) return set([]);
//   getActions()
//     .findFiles(directory)
//     .then((paths) => set(paths || []));
// });
import { writable } from 'svelte/store';

export default writable<string[]>([]);
