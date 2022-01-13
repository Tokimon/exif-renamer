<script lang="ts">
  import { Meta,Story,Template } from '@storybook/addon-svelte-csf';
  import Image from './Image.svelte';
</script>

<Meta
  title="Base/Image"
  argTypes={{
    src: { control: "text" },
    alt: { control: "text" },
  }}
/>

<Template let:args>
  <Image style="width: 200px; height: 200px;" {...args} />
</Template>

<Story name="Default" args={{
  src: 'https://placeimg.com/200/200',
  alt: 'My Image'
}} />
