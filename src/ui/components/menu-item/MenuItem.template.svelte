<script lang="ts">
  import MenuItem from './MenuItem.svelte';

  export let text: string = '';
</script>

<MenuItem on:click {...$$restProps}>{text}</MenuItem>
