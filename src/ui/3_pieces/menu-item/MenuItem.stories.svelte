<script lang="ts" context="module">
  import { Story, Template } from '@storybook/addon-svelte-csf';
  import MenuItem from './MenuItem.svelte';

  export const meta = {
    title: 'Pieces/MenuItem',
    component: MenuItem,
    argTypes: {
      id: { control: 'text', defaultValue: 'item-id' },
    },
  };
</script>

<Template let:args>
  <MenuItem on:click {...args}>
    {args.text}
  </MenuItem>
</Template>

<Story name="Default" args="{{ text: 'Menu item', icon: 'movie' }}" />
