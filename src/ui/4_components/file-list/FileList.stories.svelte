<script lang="ts" context="module">
  import { Story, Template } from '@storybook/addon-svelte-csf';
  import FileList from './FileList.svelte';
  import mockFiles from '~/ui/1_globals/story-helpers/mock-files';

  export const meta = {
    title: 'Components/FileList',
    component: FileList,
  };

  mockFiles();
</script>

<Template let:args>
  <FileList {...args} />
</Template>

<Story name="Default" />
