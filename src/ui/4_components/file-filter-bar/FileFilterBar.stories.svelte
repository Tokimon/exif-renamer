<script lang="ts" context="module">
  import { Story } from '@storybook/addon-svelte-csf';
  import FileFilterBar from './FileFilterBar.svelte';

  export const meta = {
    title: 'Components/FileFilterBar',
    component: FileFilterBar,
  };
</script>

<Story name="Default" let:args>
  <FileFilterBar count="{args.count}" />
</Story>
