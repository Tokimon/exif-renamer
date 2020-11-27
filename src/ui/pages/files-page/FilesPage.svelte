<script context="module" lang="ts">
  import FileList from '~/ui/layouts/file-list/FileList.svelte';

  import mapPaths from './utils/mapPaths';
</script>

<script lang="ts">
  export let paths = [];

  $: mappedPaths = mapPaths(paths);
</script>

<FileList paths={mappedPaths} />
