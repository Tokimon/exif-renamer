<script lang="ts">
  import { Meta,Story,Template } from '@storybook/addon-svelte-csf';

  import Overlay from './Overlay.svelte';
</script>

<Meta
  title="Base/Overlay"
  argTypes={{
    onClick: { action: "onClick" },
  }}
/>

<Template let:args>
  <Overlay on:click={args.onClick} />
</Template>

<Story name="Default" />
