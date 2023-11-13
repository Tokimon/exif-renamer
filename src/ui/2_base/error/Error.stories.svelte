<script lang="ts" context="module">
  import { Story } from '@storybook/addon-svelte-csf';
  import Error from './Error.svelte';

  export const meta = {
    title:"Base/Error",
    component: Error,
    argTypes: {
      message: { control: "text" },
    }
  }
</script>

<Story name="Default">
  <Error>Oups some error happened</Error>
</Story>
