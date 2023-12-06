<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import TextInput from '~/ui/3_pieces/text-input/TextInput.svelte';

  export let placeholder = '';
  export let className = '';
  export let names: string[] = [];
  export let value = '';
  export let title = '';
  export let input: HTMLInputElement | null = null;

  let lowerCaseNames: string[] = [];
  $: lowerCaseNames = names.map((name) => name.toLowerCase());

  const dispatch = createEventDispatcher();

  const resetValidityMessage = (e: Event) => (e.target as HTMLInputElement).setCustomValidity('');

  function onChange(e: Event) {
    resetValidityMessage(e);

    const input = e.target as HTMLInputElement;
    const name = input.value.trim();

    let error = '';

    if (!name) {
      error = 'Name Cannot be empty';
    } else if (lowerCaseNames.includes(name.toLowerCase())) {
      error = 'Name must be unique';
    }

    if (error) {
      input.setCustomValidity(error);
      input.reportValidity();
    } else dispatch('change', { name, oldName: value, input });
  }
</script>

<TextInput
  bind:input
  {title}
  {value}
  {className}
  {placeholder}
  on:change="{onChange}"
  on:input="{resetValidityMessage}"
  on:keydown
  on:blur
/>
