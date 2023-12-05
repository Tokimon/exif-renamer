<script lang="ts" context="module">
  import { Story, Template } from '@storybook/addon-svelte-csf';
  import { iconNames } from '~/ui/0_assets/svg/icons';
  import { omitEvents } from '~/ui/1_globals/utils/omitEvents';
  import Button from './Button.svelte';

  export const meta = {
    title: 'Base/Button',
    component: Button,
    argTypes: {
      icon: {
        options: iconNames,
        control: { type: 'select' },
      },
      text: { control: 'text' },
    },
  };
</script>

<style>
  :global(.large) {
    font-size: 2rem;
  }
</style>

<Template let:args>
  {@const { text = '', href, ...rest } = args}
  <Button {...omitEvents(rest)} {href} target="{href && '_blank'}" on:click on:longpress>
    {text}
  </Button>
</Template>

<Story name="Default" args="{{ text: 'Default Button' }}" />

<Story name="Icon Only" args="{{ icon: 'book' }}" />

<Story name="Link" args="{{ icon: 'launch', href: 'https://google.com', text: 'google.com' }}" />

<Story name="With Different Color" args="{{ icon: 'edit', text: 'Special color', color: 'valid' }}" />

<Story name="With Hover Color" args="{{ icon: 'edit', text: 'Special hover color', hoverColor: 'secondary' }}" />

<Story name="With Long press" args="{{ icon: 'trash', text: 'With long press', hoverColor: 'danger', longpress: 1500 }}" />

<Story name="With class override" let:args>
  {@const { text, ...rest } = args}
  <Button {...omitEvents(rest)} className="large" icon="calendar" on:click>Large button</Button>
</Story>
