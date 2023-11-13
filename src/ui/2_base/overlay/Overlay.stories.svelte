<script lang="ts" context="module">
  import { Story, Template } from '@storybook/addon-svelte-csf';
  import Overlay from './Overlay.svelte';
  import Button from '~/ui/2_base/button/Button.svelte';

  export const meta = {
    title: 'Base/Overlay',
    component: Overlay,
  };
</script>

<Template let:args>
  <Overlay on:click>
    <Button on:click="{() => alert('hi!')}">Can I click it</Button>
  </Overlay>
</Template>

<Story name="Default" />
