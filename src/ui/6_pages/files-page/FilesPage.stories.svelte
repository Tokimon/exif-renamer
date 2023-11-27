<script lang="ts" context="module">
  import { Story } from '@storybook/addon-svelte-csf';
  import mockFiles from '~/ui/1_globals/story-helpers/mock-files';
  import FilesPage from './FilesPage.svelte';

  export const meta = {
    title: 'Pages/FilesPage',
    component: FilesPage,
    parameters: {
      layout: 'fullscreen',
    },
  };

  mockFiles();
</script>

<Story name="Default">
  <FilesPage on:click />
</Story>
