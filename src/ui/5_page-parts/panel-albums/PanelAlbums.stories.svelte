<script lang="ts" context="module">
  import { Story } from '@storybook/addon-svelte-csf';
  import PanelAlbums from './PanelAlbums.svelte';

  export const meta = {
    title: 'Page Parts/PanelAlbums',
    component: PanelAlbums,
  };
</script>

<Story name="Default">
  <PanelAlbums />
</Story>
