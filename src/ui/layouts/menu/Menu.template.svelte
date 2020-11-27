<script context="module" lang="ts">
  import Menu from './Menu.svelte';
</script>

<Menu on:itemclick {...$$restProps} />
