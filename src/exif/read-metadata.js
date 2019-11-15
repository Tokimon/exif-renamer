import getExifProcess from './process';

const readMetadata = (exifProcess, fileRead) => async (path) => {
  const { data } = await exifProcess.readMetadata(path);
  fileRead && fileRead();
  return data;
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
