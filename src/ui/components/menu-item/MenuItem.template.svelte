<script context="module" lang="ts">
  import MenuItem from './MenuItem.svelte';
</script>

<script lang="ts">
  export let text: string = '';

  console.log($$restProps);
</script>

<MenuItem on:click {...$$restProps}>{text}</MenuItem>
