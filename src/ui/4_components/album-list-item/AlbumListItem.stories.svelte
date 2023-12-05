<script lang="ts" context="module">
  import { Story } from '@storybook/addon-svelte-csf';
  import AlbumListItem from './AlbumListItem.svelte';

  export const meta = {
    title: 'Components/AlbumListItem',
    component: AlbumListItem,
  };
</script>

<Story name="Default">
  <AlbumListItem name="Some Album" on:add-to on:edit on:delete on:open />
</Story>
