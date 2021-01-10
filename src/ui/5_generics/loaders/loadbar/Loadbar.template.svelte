<script lang="ts">
  import Loadbar from './Loadbar.svelte';

  export let value = 0;
</script>

<Loadbar {value} total={100} style="width: 400px" />
