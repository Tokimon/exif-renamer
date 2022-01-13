<script lang="ts">
  import { Meta,Story,Template } from '@storybook/addon-svelte-csf';
  import FilesPage from './FilesPage.svelte';

  import createFileInfoList from '~/ui/1_globals/story-helpers/createFileInfoList';

  const files = createFileInfoList();
</script>

<Meta title="Pages/FilesPage" />

<Story name="Default">
  <FilesPage files={files} />
</Story>
