<script lang="ts" context="module">
  import { Story, Template } from '@storybook/addon-svelte-csf';
  import { iconNames } from '~/ui/0_assets/svg/icons';
  import IconButton from './IconButton.svelte';

  export const meta = {
    title: 'Base/IconButton',
    component: IconButton,
    argTypes: {
      icon: {
        options: iconNames,
        control: { type: 'select' },
      },
      text: { control: 'text' },
    },
  };
</script>

<Template let:args>
  <IconButton {...args} on:click on:longpress />
</Template>

<Story name="Default" args="{{ icon: 'gear' }}" />

<Story name="Width different base color" args="{{ icon: 'folder', color: 'primary' }}" />

<Story name="With Hover Color" args="{{ icon: 'edit', hoverColor: 'valid' }}" />

<Story name="With Long press" args="{{ icon: 'trash', hoverColor: 'danger', longpress: 1500 }}" />
