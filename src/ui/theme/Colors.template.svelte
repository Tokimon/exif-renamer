<script lang="ts">
  import Section from '~/story-helpers/Section.svelte';
  import Color from '~/story-helpers/Color.svelte';

  import colors from './colors';
</script>

<Section>
  {#each Object.entries(colors) as [name, color]}
    <Color value={color}>{name}</Color>
  {/each}
</Section>
