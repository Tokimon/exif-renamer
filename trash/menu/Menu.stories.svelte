<script lang="ts" context="module">
  import { Story, Template } from '@storybook/addon-svelte-csf';
  import Menu from './Menu.svelte';

  export const meta = {
    title: 'Components/Menu',
    component: Menu,
  };

  const items = [
    { id: '1', label: 'Position', icon: 'location', active: true },
    { id: '2', label: 'Documentation', icon: 'book' },
  ];
</script>

<Template let:args>
  <Menu {...args} />
</Template>

<Story name="Default" args="{{ items }}" />
