<script lang="ts" context="module">
  import { Story, Template } from '@storybook/addon-svelte-csf';
  import Output from '~/ui/1_globals/story-helpers/Output.svelte';
  import SizeInput from './SizeInput.svelte';

  export const meta = {
    title: 'Pieces/SizeInput',
    component: SizeInput,
  };
</script>

<script lang="ts">
  let size = '100x200';
</script>

<Template let:args>
  <SizeInput {...args} bind:size />
  <Output>{size}</Output>
</Template>

<Story name="Default" args="{{ title: 'Size input', name: 'size', size }}" />
