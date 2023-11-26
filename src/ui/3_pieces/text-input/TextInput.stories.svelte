<script lang="ts" context="module">
  import { Story, Template } from '@storybook/addon-svelte-csf';
  import Output from '~/ui/1_globals/story-helpers/Output.svelte';
  import TextInput from './TextInput.svelte';

  export const meta = {
    title: 'Pieces/TextInput',
    component: TextInput,
  };
</script>

<script lang="ts">
  let value = 'Some input value';
</script>

<Template let:args>
  <TextInput {...args} bind:value on:input />
  <Output>{value}</Output>
</Template>

<Story name="Default" args="{{ title: 'Text Input', name: 'text', placeholder: 'Insert text', value }}" />
