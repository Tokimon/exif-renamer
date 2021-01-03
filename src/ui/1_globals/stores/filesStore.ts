import { writable } from 'svelte/store';

import type { ExifCache, ExifData } from '~/types/exif';



interface FilesStore {
  paths: Set<string>,
  exifCache: ExifCache;
}



function matchExifDataToPaths(paths: Set<string>, exifCache: ExifCache): ExifCache {
  const newExifCache = new Map();

  for (const [path, exifData] of exifCache.entries()) {
    paths.has(path) && newExifCache.set(path, exifData);
  }

  return newExifCache;
}



function createFilesStore() {
  const { subscribe, set, update } = writable({
    paths: new Set(),
    exifCache: new Map()
  } as FilesStore);

  const updateData = (paths: Set<string>, exifCache: ExifCache) => ({
    exifCache: matchExifDataToPaths(paths, exifCache),
    paths
  });

  return {
    subscribe,

    setPaths(paths: string[] | Set<string>) {
      update(({ exifCache }) => updateData(new Set(paths), exifCache));
    },

    updateExifData(exifData: ExifCache) {
      update(({ paths }) => updateData(paths, exifData));
    },

    updateFileExifData(path: string, exifData: ExifData) {
      update(({ paths, exifCache }) => {
        exifCache.set(path, exifData);
        return updateData(paths, exifCache);
      });
    }
  };
}

export const files = createFilesStore();