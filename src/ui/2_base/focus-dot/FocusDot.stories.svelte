<script lang="ts">
  import { Meta,Story,Template } from '@storybook/addon-svelte-csf';
  import FocusDot from './FocusDot.svelte';
</script>

<Meta
  title="Base/FocusDot"
  argTypes={{ number: { control: "number" } }}
/>

<Template let:args>
  <FocusDot>{args.number || 0}</FocusDot>
</Template>

<Story name="Default" args={{ number: 99 }} />
