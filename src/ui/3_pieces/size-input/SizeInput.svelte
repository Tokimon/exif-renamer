<script lang="ts">
  import type { ChangeEventHandler } from 'svelte/elements';
  import InputWrap from '~/ui/2_base/input-wrap/InputWrap.svelte';

  export let title = '';
  export let name = '';
  export let size = '';

  let [width, height] = ['', ''];
  $: [width, height] = size.split('x');

  const onChange: ChangeEventHandler<HTMLInputElement> = () => {
    size = width + 'x' + height;
  };
</script>

<style>
  .times {
    padding: 0.5rem 1rem;
    font-weight: bold;
    font-size: 1.4rem;
    line-height: 1.8rem;
  }

  input {
    flex: 1 1 0;
    min-width: 40px;
  }
</style>

<InputWrap {title}>
  <input {name} bind:value="{width}" placeholder="width" type="number" min="0" on:change="{onChange}" />
  <span class="times">&times;</span>
  <input {name} bind:value="{height}" placeholder="height" type="number" min="0" on:change="{onChange}" />
</InputWrap>
