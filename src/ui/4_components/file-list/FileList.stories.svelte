<script lang="ts" context="module">
  import { Story, Template } from '@storybook/addon-svelte-csf';
  import FileList from './FileList.svelte';

  export const meta = {
    title: 'Components/FileList',
    component: FileList,
  };
</script>

<script lang="ts">
  import createFileInfoList from '~/ui/1_globals/story-helpers/createFileInfoList';

  const files = createFileInfoList();
</script>

<Template let:args>
  <FileList {...args} />
</Template>

<Story name="Default" args="{{ files }}" />
