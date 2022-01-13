<script lang="ts">
  import { Meta,Story,Template } from '@storybook/addon-svelte-csf';
  import Modal from './Modal.svelte';
</script>



<Meta
  title="Components/Modal"
  argTypes={{
    width: {
      control: {
        type: 'range',
        min: 25,
        max: 80,
        step: 1,
        defaultValue: 50
      }
    },
    height: {
      control: {
        type: 'range',
        min: 25,
        max: 80,
        step: 1,
        defaultValue: 50
      }
    },
    onClose: { action: "onClose" }
  }}
/>

<Template let:args>
  <Modal style="width: {args.width}%; height: {args.height}%;" on:close={args.onClose} />
</Template>

<Story name="Default" args={{}} />
