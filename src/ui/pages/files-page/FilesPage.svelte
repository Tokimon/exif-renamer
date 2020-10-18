<script lang="typescript">
  import FileList from '~/ui/layouts/file-list/FileList.svelte';

  import mapPaths from './utils/mapPaths.js';

  export let paths = [];

  $: mappedPaths = mapPaths(paths);
</script>

<FileList paths={mappedPaths} />
