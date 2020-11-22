<script lang="ts">
  import Button from './Button.svelte';

  export let text: string = '';

  const rest = $$restProps;
</script>

<Button on:click {...rest}>{text}</Button>
<Button on:click {...rest}>{text} 2</Button>
