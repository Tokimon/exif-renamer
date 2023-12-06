<script lang="ts">
  import InputWrap from '~/ui/2_base/input-wrap/InputWrap.svelte';

  export let title = '';
  export let name = '';
  export let value = '';
  export let placeholder = '';
  export let pattern: string | undefined = undefined;
  export let required = false;
  export let className = '';
  export let style = '';
  export let input: HTMLInputElement | null = null;
</script>

<InputWrap {title} {style} {className}>
  <input
    {name}
    {placeholder}
    {pattern}
    {required}
    type="text"
    style="flex: 1 1 100%;"
    bind:this="{input}"
    bind:value
    on:input
    on:change
    on:keydown
    on:keyup
    on:focus
    on:blur
  />
</InputWrap>
