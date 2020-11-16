<script context="module" lang="typescript">
  import Section from "~/ui/example-helpers/Section.svelte";
  import Color from "~/ui/example-helpers/Color.svelte";

  import colors from "./colors";
</script>

<Section>
  {#each Object.entries(colors) as [name, color]}
    <Color value={color}>{name}</Color>
  {/each}
</Section>
