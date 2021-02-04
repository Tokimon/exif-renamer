<script lang="ts">
  import TinyButton from './TinyButton.svelte';

  export let text: string = '';
</script>

<TinyButton on:click {...$$restProps} />
<TinyButton on:click {...$$restProps}>{text}</TinyButton>
