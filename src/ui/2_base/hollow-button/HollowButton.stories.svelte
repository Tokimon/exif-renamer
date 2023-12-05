<script lang="ts" context="module">
  import { Story, Template } from '@storybook/addon-svelte-csf';
  import { iconNames } from '~/ui/0_assets/svg/icons';
  import HollowButton from './HollowButton.svelte';

  export const meta = {
    title: 'Base/HollowButton',
    component: HollowButton,
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
  {@const { text = '', ...rest } = args}
  <HollowButton {...rest} on:click on:longpress>
    {text}
  </HollowButton>
</Template>

<Story name="Default" args="{{ text: 'Hollow Button', icon: 'gear' }}" />

<Story name="With Hover Color" args="{{ icon: 'edit', text: 'Special hover color', hoverColor: 'secondary' }}" />

<Story name="With Long press" args="{{ icon: 'trash', text: 'With long press', hoverColor: 'danger', longpress: 1500 }}" />
