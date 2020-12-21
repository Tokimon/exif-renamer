<script lang="ts">
  import FileList from '@/ui/layouts/file-list/FileList.svelte';

  import mapPaths from './utils/mapPaths';

  export let paths: string[] = [];

  $: mappedPaths = mapPaths(paths);
</script>

<FileList paths={mappedPaths} />
