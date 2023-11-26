<script lang="ts" context="module">
  import { Story, Template } from '@storybook/addon-svelte-csf';
  import FileTile from './FileTile.svelte';

  export const meta = {
    title: 'Components/FileTile',
    component: FileTile,
  };

  const baseArgs = {
    name: 'Some long file name.png',
    count: 1,
    selected: false,
  };
</script>

<Template let:args>
  <FileTile {...args} style="width: 100px" on:click />
</Template>

<Story name="No Thumbnail" args="{{ ...baseArgs }}" />
<Story name="With Thumbnail" args="{{ ...baseArgs, thumbnail: 'https://placekitten.com/100/100' }}" />
