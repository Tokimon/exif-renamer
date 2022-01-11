<script lang="ts">
  import { Meta,Story,Template } from '@storybook/addon-svelte-csf';

  import Error from './Error.svelte';
</script>

<Meta
  title="Base/Error"
  argTypes={{
    message: { control: "text" },
  }}
/>

<Template let:args>
  <Error>{args.message}</Error>
</Template>

<Story name="Default" args={{ message: 'Oups some error happened' }} />
