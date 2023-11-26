<script lang="ts" context="module">
  import { Story } from '@storybook/addon-svelte-csf';
  import mockFiles from '~/ui/1_globals/story-helpers/mock-files';
  import FileFilterBar from './FileFilterBar.svelte';

  export const meta = {
    title: 'Components/FileFilterBar',
    component: FileFilterBar,
  };

  mockFiles();
</script>

<Story name="Default" let:args>
  <FileFilterBar />
</Story>
