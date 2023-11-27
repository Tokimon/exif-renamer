<script lang="ts" context="module">
  import { Story, Template } from '@storybook/addon-svelte-csf';
  import { iconNames } from '~/ui/0_assets/svg/icons';
  import TinyButton from './TinyButton.svelte';

  export const meta = {
    title: 'Pieces/TinyButton',
    component: TinyButton,
    argTypes: {
      icon: {
        options: iconNames,
        control: { type: 'select' },
      },
    },
  };
</script>

<Template let:args>
  <TinyButton {...args} target="{args.href && '_blank'}" on:click>{args.text}</TinyButton>
</Template>

<Story name="Default" args="{{ text: 'Tiny button' }}" />
