<script lang="ts">
  import type { FileInfo } from '~/types/file.d';

  import FileFilterBar from '~/ui/4_components/file-filter-bar/FileFilterBar.svelte';
  import FileList from '~/ui/4_components/file-list/FileList.svelte';

  export let files: FileInfo[] = [];
  let selection: string[] = [];
</script>

<FileFilterBar {files} {selection} style="margin-bottom: 1rem;" />

<FileList {files} bind:selection />
