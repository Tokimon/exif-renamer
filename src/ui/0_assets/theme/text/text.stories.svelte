<script lang="ts" context="module">
  import { Story } from '@storybook/addon-svelte-csf';
  import Section from '~/ui/1_globals/story-helpers/Section.svelte';

  export const meta = {
    title: 'Theme/text',
  };
</script>

<Story name="Default">
  <Section style="flex-direction: column;">
    <h1>Headline 1</h1>
    <h2>Headline 2</h2>
    <h3>Headline 3</h3>
    <h4>Headline 4</h4>
    <h5>Headline 5</h5>

    <p>Normal text</p>

    <div class="headline">Div with Headline style</div>
    <div>Normal div</div>
  </Section>
</Story>
