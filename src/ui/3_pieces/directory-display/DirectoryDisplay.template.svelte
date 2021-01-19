<script lang="ts">
  import DirectoryDisplay from './DirectoryDisplay.svelte';

  export let width = 100;
</script>

<DirectoryDisplay {...$$restProps} style="width:{width}%" />
