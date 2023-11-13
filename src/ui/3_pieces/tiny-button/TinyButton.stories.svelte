<script lang="ts" context="module">
  import { Story, Template } from '@storybook/addon-svelte-csf';
  import TinyButton from './TinyButton.svelte';

  export const meta = {
    title: 'Pieces/TinyButton',
    component: TinyButton,
  };
</script>

<Template let:args>
  <TinyButton {...args} target="{args.href && '_blank'}" on:click>{args.text}</TinyButton>
</Template>

<Story name="Default" args="{{ text: 'Tiny button' }}" />
