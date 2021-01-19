<script lang="ts">
  import PathString from './PathString.svelte';

  export let width = 100;
</script>

<PathString {...$$restProps} style="width:{width}%" />
