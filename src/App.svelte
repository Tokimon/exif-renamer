<script lang="ts">
  import { getActions } from '~/ui/1_globals/core/serverActions';
  import directoryStore from '~/ui/1_globals/stores/directoryStore';
  import FilesPage from '~/ui/6_pages/files-page/FilesPage.svelte';

  const { chooseDirectory } = getActions();

  const onDirClick = async () => {
    const directory = await chooseDirectory();
    directory && directoryStore.set(directory);
  };
</script>

<FilesPage on:dir-click="{onDirClick}" />
