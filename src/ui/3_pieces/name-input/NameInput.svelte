<script lang="ts">
  import { createEventDispatcher, type ComponentProps } from 'svelte';
  import { omitEvents } from '~/ui/1_globals/utils/omitEvents';
  import TextInput from '~/ui/3_pieces/text-input/TextInput.svelte';

  type $$Props = ComponentProps<TextInput> & {
    input?: HTMLInputElement | null;
    names?: string[];
  };

  let { value = '', input = null, names = [], ...rest } = omitEvents<$$Props>($$restProps);

  let oldName: string;
  $: oldName = value;

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
    } else {
      dispatch('change', { name, oldName, input });
      oldName = name;
      input.blur();
    }
  }

  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      const input = e.target as HTMLInputElement;
      input.value = oldName;
      input.blur();
    }
  };
</script>

<TextInput bind:input {value} {...rest} on:change="{onChange}" on:input="{resetValidityMessage}" on:keydown="{handleEscape}" on:blur />
