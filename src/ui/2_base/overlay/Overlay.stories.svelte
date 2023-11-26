<script lang="ts" context="module">
  import { Story } from '@storybook/addon-svelte-csf';
  import Button from '~/ui/2_base/button/Button.svelte';
  import Overlay from './Overlay.svelte';

  export const meta = {
    title: 'Base/Overlay',
    component: Overlay,
  };
</script>

<Story name="Default">
  <Overlay on:click>
    <Button on:click="{() => alert('Yes you can!')}">Can I click it</Button>
  </Overlay>
</Story>
