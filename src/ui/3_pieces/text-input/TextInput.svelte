<script lang="ts">
  import InputWrap from '~/ui/2_base/input-wrap/InputWrap.svelte';

  export let title = '';
  export let name = '';
  export let value = '';
  export let placeholder = '';
</script>

<InputWrap {title}>
  <input {name} bind:value {placeholder} type="text" style="flex: 1 1 100%;" on:input on:change />
</InputWrap>
