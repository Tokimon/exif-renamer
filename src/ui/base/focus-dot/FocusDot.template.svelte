<script lang="ts">
  import FocusDot from './FocusDot.svelte';

  export let number: number = 0;
</script>

<FocusDot>{number || 0}</FocusDot>
