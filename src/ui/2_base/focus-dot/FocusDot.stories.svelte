<script lang="ts" context="module">
  import { Story, Template } from '@storybook/addon-svelte-csf';
  import FocusDot from './FocusDot.svelte';

  export const meta = {
    title: 'Base/FocusDot',
    component: FocusDot,
  };
</script>

<Template let:args>
  <FocusDot>{args.number ?? 0}</FocusDot>
</Template>

<Story name="Default" args="{{ number: 99 }}" />
