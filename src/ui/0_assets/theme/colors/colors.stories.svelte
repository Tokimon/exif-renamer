<script lang="ts" context="module">
  import { Story } from '@storybook/addon-svelte-csf';
  import Section from '~/ui/1_globals/story-helpers/Section.svelte';
  import Color from './Color.svelte';

  export const meta = {
    title: 'Theme/Colors',
    component: Color,
  };
</script>

<Story name="Default">
  <Section>
    <Color value="primary">Primary</Color>
    <Color value="secondary">Secondary</Color>
    <Color value="danger">Danger</Color>
    <Color value="caution">Caution</Color>
    <Color value="valid">Valid</Color>
    <Color value="text">Text</Color>
  </Section>
</Story>
