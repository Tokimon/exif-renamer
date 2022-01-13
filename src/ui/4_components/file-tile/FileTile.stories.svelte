<script lang="ts">
  import { Meta,Story,Template } from '@storybook/addon-svelte-csf';
  import FileTile from './FileTile.svelte';
</script>

<Meta
  title="Components/FileTile"
  component={FileTile}
  argTypes={{
    name: { control: "text" },
    thumbnail: { control: "text", defaultValue: 'https://placeimg.com/100/100' },
    count: { control: "number" },
  }}
/>

<Template let:args>
  <FileTile {...args}  />
</Template>

<Story name="Default" args={{ name: 'Some logn file name.png'  }} />
