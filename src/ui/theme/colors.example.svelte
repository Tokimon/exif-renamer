<script context='module'>
  import Section from 'example-helpers/Section.svelte';
  import Color from 'example-helpers/Color.svelte';

  import colors from './colors';
</script>

<Section>
  {#each Object.entries(colors) as [name, color]}
  <Color value={color}>{name}</Color>
  {/each}
</Section>
