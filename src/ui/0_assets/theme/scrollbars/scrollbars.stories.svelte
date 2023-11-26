<script lang="ts" context="module">
  import { Story } from '@storybook/addon-svelte-csf';

  export const meta = {
    title: 'Theme/Scrollbars',
  };
</script>

<style>
  div {
    overflow: scroll;
    width: 25rem;
    height: 25rem;
    font-size: 4rem;
  }
</style>

<Story name="Default">
  <div>
    <img src="https://placekitten.com/500/500" alt="cute" />
  </div>
</Story>
