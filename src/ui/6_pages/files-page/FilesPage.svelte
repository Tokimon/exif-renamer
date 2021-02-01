<script lang="ts">
  import type { FileInfo } from '~/types/file.d';

  import FileFilterBar from '~/ui/4_components/file-filter-bar/FileFilterBar.svelte';
  import FileList from '~/ui/4_components/file-list/FileList.svelte';

  export let files: FileInfo[] = [];
</script>

<FileFilterBar count={files.length} />

<FileList {files} />
