<script lang="ts">
  import Modal from './Modal.svelte';

  export let width = 50;
  export let height = 50;
</script>

<Modal style="width: {width}%; height: {height}%;" on:close {...$$restProps} />
