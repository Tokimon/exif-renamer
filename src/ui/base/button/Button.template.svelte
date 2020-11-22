<script lang="ts">
  import Button from './Button.svelte';

  export let text: string = '';
</script>

<Button on:click {...$$restProps}>{text}</Button>
<Button on:click {...$$restProps}>{text} 2</Button>
