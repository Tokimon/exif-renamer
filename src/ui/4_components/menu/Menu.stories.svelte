<script lang="ts">
  import { Meta,Story,Template } from '@storybook/addon-svelte-csf';
  import Menu from './Menu.svelte';

  const items = [
    { id:'1', label: 'Position', icon: 'location', active: true },
    { id:'2', label: 'Documentation', icon: 'book' }
  ];
</script>

<Meta
  title="Components/Menu"
  argTypes={{
    items: { control: "object" },
    onItemClick: { action: "onItemClick" },
  }}
/>

<Template let:args>
  <Menu on:itemclick={args.onItemClick} items={args.items} />
</Template>

<Story name="Default" args={{ items }} />
