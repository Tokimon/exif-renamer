<script lang="ts">
  import { Meta,Story,Template } from '@storybook/addon-svelte-csf';
  import LoadingOverlay from './LoadingOverlay.svelte';
</script>

<Meta
  title="Generics/LoadingOverlay"
  argTypes={{
    text: { control: "text" }
  }}
/>

<Template let:args>
  <LoadingOverlay>{args.text}</LoadingOverlay>
</Template>

<Story name="Default" args={{ text: 'Loading text' }} />
