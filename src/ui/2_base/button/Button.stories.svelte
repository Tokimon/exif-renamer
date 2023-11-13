<script lang="ts" context="module">
  import { Story, Template } from '@storybook/addon-svelte-csf';
  import Button from './Button.svelte';

  import { large } from './button.story.module.css';

  export const meta = {
    title: 'Base/Button',
    component: Button,
  };
</script>

<Template let:args>
  <Button {...args} target="{args.href && '_blank'}" on:click>
    {args.text ?? ''}
  </Button>
</Template>

<Story name="Default" args="{{ text: 'Default Button' }}" />

<Story name="Icon Only" args="{{ icon: 'book' }}" />

<Story name="Link" args="{{ icon: 'launch', href: 'https://google.com', text: 'google.com' }}" />

<Story name="With class override" let:args>
  <Button {...args} className="{large}" on:click>Large button</Button>
</Story>
