<script lang="ts" context="module">
  import { Story, Template } from '@storybook/addon-svelte-csf';
  import { iconNames } from '~/ui/0_assets/svg/icons';
  import { omitEvents } from '~/ui/1_globals/utils/omitEvents';
  import TinyButton from './TinyButton.svelte';

  export const meta = {
    title: 'Base/TinyButton',
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
  {@const { text = '', href, ...rest } = args}
  <TinyButton {...omitEvents(rest)} target="{href && '_blank'}" on:click>{text}</TinyButton>
</Template>

<Story name="Default" args="{{ text: 'Tiny button' }}" />
