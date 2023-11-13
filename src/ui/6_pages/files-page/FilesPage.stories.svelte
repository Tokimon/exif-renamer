<script lang="ts" context="module">
  import { Story } from '@storybook/addon-svelte-csf';
  import FilesPage from './FilesPage.svelte';

  import createFileInfoList from '~/ui/1_globals/story-helpers/createFileInfoList';

  export const meta = {
    title: 'Pages/FilesPage',
    component: FilesPage,
  };

  const files = createFileInfoList();
</script>

<Story name="Default">
  <FilesPage {files} />
</Story>
