<script lang="ts" context="module">
  import { Story } from '@storybook/addon-svelte-csf';
  import ZoomLevel from './ZoomLevel.svelte';

  export const meta = {
    title: 'Components/ZoomLevel',
    component: ZoomLevel,
  };
</script>

<script lang="ts">
  import zoomStore from '~/ui/1_globals/stores/zoomStore';
</script>

<Story name="Default">
  <ZoomLevel />
  <p>{$zoomStore}</p>
</Story>
