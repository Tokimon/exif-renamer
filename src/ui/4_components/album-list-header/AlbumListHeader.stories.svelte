<script lang="ts" context="module">
  import { Story } from '@storybook/addon-svelte-csf';
  import AlbumListHeader from './AlbumListHeader.svelte';

  export const meta = {
    title: 'Components/AlbumListHeader',
    component: AlbumListHeader,
  };
</script>

<Story name="Default">
  <AlbumListHeader on:add-album />
</Story>
