<script lang="ts">
  import mapPaths from '~/ui/1_globals/utils/mapPaths';
  import FileList from '~/ui/4_components/file-list/FileList.svelte';

  export let paths: string[] = [];

  $: mappedPaths = mapPaths(paths);
</script>

<FileList paths={mappedPaths} />
