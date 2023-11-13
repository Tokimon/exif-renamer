import { dialog } from 'electron';
import type { ChooseDirectoryAction } from '~/types/serverActions.d';

const chooseDirectory: ChooseDirectoryAction = async () => {
  const { canceled, filePaths } = await dialog.showOpenDialog({
    properties: ['openDirectory'],
  });

  return canceled ? null : filePaths[0];
};

export default chooseDirectory;
