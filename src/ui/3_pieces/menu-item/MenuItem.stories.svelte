<script lang="ts">
  import { Meta,Story,Template } from '@storybook/addon-svelte-csf';
  import MenuItem from './MenuItem.svelte';
</script>

<Meta
  title="Pieces/MenuItem"
  argTypes={{
    id: { control: 'text', defaultValue: 'item-id' },
    text: { control: 'text' },
    icon: { control: 'text' },
    active: { control: 'boolean', defaultValue: false },
    onClick: { action: "onClick" },
  }}
/>

<Template let:args>
  <MenuItem on:click={args.onClick} icon={args.icon} active={args.active}>
    {args.text}
  </MenuItem>
</Template>

<Story name="Default" args={{ text: 'Menu item', icon: 'movie' }} />

