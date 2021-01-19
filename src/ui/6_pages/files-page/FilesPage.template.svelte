<script lang="ts">
  import FilesPage from './FilesPage.svelte';

  console.log($$restProps);
</script>

<FilesPage {...$$restProps} />
