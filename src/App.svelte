<script lang="ts">
  import directoryStore from '~/ui/1_globals/stores/directoryStore';
  import fileInfoStore from './ui/1_globals/stores/fileInfoStore';
  import { getActions } from '~/ui/1_globals/core/serverActions';

  import DirectoryDisplay from './ui/3_pieces/directory-display/DirectoryDisplay.svelte';

  import FilesPage from '~/ui/6_pages/files-page/FilesPage.svelte';

  const { chooseDirectory } = getActions();

  const clickDirectory = async () => {
    const directory = await chooseDirectory();
    directory && directoryStore.set(directory);
  };
</script>

<div>
  <DirectoryDisplay path="{$directoryStore}" style="cursor: pointer" on:click="{clickDirectory}" />

  <FilesPage files="{$fileInfoStore}" />
</div>
