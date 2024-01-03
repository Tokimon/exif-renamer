<script lang="ts" context="module">
  import { Story } from '@storybook/addon-svelte-csf';
  import AlbumEditListItem from './AlbumEditListItem.svelte';

  export const meta = {
    title: 'Components/AlbumEditListItem',
    component: AlbumEditListItem,
  };
</script>

<Story name="Default">
  <AlbumEditListItem name="Some Album" on:change-name on:delete />
</Story>
