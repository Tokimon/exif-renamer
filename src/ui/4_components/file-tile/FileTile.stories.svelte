<script lang="ts" context="module">
  import { Story, Template } from '@storybook/addon-svelte-csf';
  import FileTile from './FileTile.svelte';

  export const meta = {
    title: 'Components/FileTile',
    component: FileTile,
  };
</script>

<Template let:args>
  <FileTile {...args} on:change />
</Template>

<Story name="No Thumbnail" args="{{ name: 'Some long file name.png' }}" />
<Story name="With Thumbnail" args="{{ name: 'Some long file name.png', thumbnail: 'https://placekitten.com/100/100' }}" />
