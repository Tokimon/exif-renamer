import { promises as fs } from 'fs';

import { getFile } from '../utils/file-cache';

import getExifProcess from './process';

const exifDate = (date) => {
  date = date.replace(':', '-').replace(':', '-');
  return new Date(date);
};

const readMetadata = (exifProcess, fileRead) => async (path) => {
  const { mtimeMs, ctimeMs, birthtimeMs, size } = await fs.stat(path);
  const modified = Math.max(mtimeMs, ctimeMs);

  const cachedMd = getFile(path);

  if (cachedMd && cachedMd.modified === modified && cachedMd.size === size) {
    return cachedMd;
  }

  const md = {
    size,
    created: birthtimeMs,
    modified
  };

  const { data } = await exifProcess.readMetadata(path);

  if (data) {
    md.exif = data[0];
    md.created = Math.min(md.created, exifDate(md.exif.FileCreateDate).getTime());
  }

  fileRead && fileRead(path, md);
  return md;
};

export default async (paths, fileRead) => {
  const exifProcess = getExifProcess();

  await exifProcess.open();

  const metadata = await Promise.all(
    paths.map(readMetadata(exifProcess, fileRead))
  );

  await exifProcess.close();

  return metadata;
};
