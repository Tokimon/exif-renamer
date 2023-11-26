<script lang="ts" context="module">
  import { Story, Template } from '@storybook/addon-svelte-csf';
  import Button from './Button.svelte';

  export const meta = {
    title: 'Base/Button',
    component: Button,
  };
</script>

<style>
  :global(.large) {
    font-size: 2rem;
  }
</style>

<Template let:args>
  <Button {...args} target="{args.href && '_blank'}" on:click>
    {args.text ?? ''}
  </Button>
</Template>

<Story name="Default" args="{{ text: 'Default Button' }}" />

<Story name="Icon Only" args="{{ icon: 'book' }}" />

<Story name="Link" args="{{ icon: 'launch', href: 'https://google.com', text: 'google.com' }}" />

<Story name="With class override" let:args>
  <Button {...args} className="large" on:click icon="calendar">Large button</Button>
</Story>
