<script lang="ts" context="module">
  import { Story, Template } from '@storybook/addon-svelte-csf';
  import Image from './Image.svelte';

  export const meta = {
    title: 'Base/Image',
    component: Image,
  };
</script>

<Template let:args>
  <Image style="width: 200px; height: 200px;" {...args} />
</Template>

<Story
  name="Failed unknown image"
  args="{{
    src: 'https://placekitten.com/200/200',
    alt: 'My Image',
  }}"
/>

<Story
  name="Failed known file"
  args="{{
    src: 'some/book.pdf',
    alt: 'My Image',
  }}"
/>

<Story
  name="Loaded image"
  args="{{
    src: 'https://placekitten.it/200/200',
    alt: 'My Image',
  }}"
/>
