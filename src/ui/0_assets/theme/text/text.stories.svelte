<script lang="ts" context="module">
    import { Story } from '@storybook/addon-svelte-csf';

  import Section from '~/ui/1_globals/story-helpers/Section.svelte';

  import './text.css';

  export const meta = {
    title: "Theme/text",
  }
</script>


<Story name="Default">
  <div style="display: flex; flex-direction: column; gap: 1rem;">
    <h1>Headline 1</h1>
    <h2>Headline 2</h2>
    <h3>Headline 3</h3>
    <h4>Headline 4</h4>
    <h5>Headline 5</h5>

    <p>Normal text</p>
    
    <div class="headline">Div with Headline style</div>
    <div>Normal div</div>
  </div>
</Story>
