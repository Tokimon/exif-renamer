<script lang="ts" context="module">
  import { Story, Template } from '@storybook/addon-svelte-csf';
  import Output from '~/ui/1_globals/story-helpers/Output.svelte';
  import { omitEvents } from '~/ui/1_globals/utils/omitEvents';
  import NameInput from './NameInput.svelte';

  export const meta = {
    title: 'Pieces/NameInput',
    component: NameInput,
  };
</script>

<script lang="ts">
  let value = 'Some name';
  const onChange = ({ detail }: CustomEvent) => (value = detail.name);
</script>

<Template let:args>
  <NameInput {...omitEvents(args)} on:change="{onChange}" on:change on:input />
  <Output>{value}</Output>
</Template>

<Story name="Default" args="{{ title: 'Name Input', names: [value], placeholder: 'Insert text', value }}" />
