<script>
  import Files from 'ui/layouts/files/Files.svelte';
  import mapPaths from './utils/mapPaths.js';

  export let paths = [];

  $: mappedPaths = mapPaths(paths);
</script>

<Files paths={mappedPaths} />
