<script lang="ts">
  import { Meta,Story,Template } from '@storybook/addon-svelte-csf';
  import FileList from './FileList.svelte';

  import createFileInfoList from '~/ui/1_globals/story-helpers/createFileInfoList';

  const files = createFileInfoList();
</script>

<Meta
  title="Components/FileList"
  argTypes={{
    onThumbClick: { action: "onThumbClick" },
  }}
/>

<Template let:args>
  <FileList on:thumbclick={args.onThumbClick} files={args.files} />
</Template>

<Story name="Default" args={{ files  }} />
