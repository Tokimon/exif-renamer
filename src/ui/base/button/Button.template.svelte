<script lang="ts">
  import Button from './Button.svelte';

  export let text: string = '';

  let target: string;

  if ($$restProps.href) {
    target = '_blank';
  }
</script>

<Button {target} on:click {...$$restProps}>{text}</Button>
<Button {target} on:click {...$$restProps}>{text} 2</Button>
