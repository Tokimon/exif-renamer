<script lang="ts">
  import { Meta,Story,Template } from '@storybook/addon-svelte-csf';
  import Loadbar from './Loadbar.svelte';
</script>

<Meta
  title="Generics/Loadbar"
  argTypes={{
    value: { 
      control: {
        type: 'range',
        min: 0,
        max: 100,
        step: 1
      }
    }
  }}
/>

<Template let:args>
  <Loadbar value={args.value} total={100} style="width: 400px" />
</Template>

<Story name="Default" args={{ value: 50 }} />
