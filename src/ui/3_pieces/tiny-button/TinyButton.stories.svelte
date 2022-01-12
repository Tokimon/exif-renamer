<script lang="ts">
  import { Meta,Story,Template } from '@storybook/addon-svelte-csf';
  import omit from 'lodash/omit';
  import { colors } from '~/ui/1_globals/theme/colors';
  import TinyButton from './TinyButton.svelte';
</script>

<Meta
  title="Pieces/TinyButton"
  component={TinyButton}
  argTypes={{
    label: { control: "text" },
    icon: { control: "text" },
    disabled: { control: "boolean", defaultValue: false },
    static: { control: "boolean", defaultValue: false },
    color: {
      control: { type: "select", options: Object.keys(colors) },
    },
    href: { control: "text" },
    onClick: { action: "onClick" },
  }}
/>

<Template let:args>
  <TinyButton
    {...omit(args, ['onClick'])}
    target={args.href && '_blank'}
    on:click={args.onClick}
  />
</Template>

<Story name="Default" args={{ label: 'Tiny button' }} />
