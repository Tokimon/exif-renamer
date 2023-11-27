import { deletedFileStore, fileInfoStore, selectedFileStore } from '~/ui/1_globals/stores/fileInfoStore';
import createFileInfoList from '~/ui/1_globals/story-helpers/createFileInfoList';

export default () => fileInfoStore.set(createFileInfoList());

export const mockSelection = () =>
  selectedFileStore.set(
    new Set(
      createFileInfoList()
        .slice(5, 10)
        .map(({ name }) => name),
    ),
  );

export const mockDeletion = () =>
  deletedFileStore.set(
    new Set(
      createFileInfoList()
        .slice(30)
        .map(({ name }) => name),
    ),
  );
