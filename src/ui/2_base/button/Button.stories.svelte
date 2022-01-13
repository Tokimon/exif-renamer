<script lang="ts">
  import { Meta,Story,Template } from '@storybook/addon-svelte-csf';
  import omit from 'lodash/omit';
  import { colors } from '~/ui/1_globals/theme/colors';
  import Button from './Button.svelte';
</script>

<Meta
  title="Base/Button"
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
  <Button
    {...omit(args, ['onClick'])}
    target={args.href && '_blank'}
    on:click={args.onClick}
  />
</Template>

<Story name="Default" args={{ label: 'Default button' }}/>

<Story name="Icon Only" args={{ icon: 'book' }}/>

<Story name="Link" args={{ icon: 'launch', href: 'https://google.com', label: 'google.com' }}/>