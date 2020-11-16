<script context="module">
  import Section from "~/ui/example-helpers/Section.svelte";

  import Thumb from "./Thumb.svelte";

  const src = "https://placeimg.com/150/150/nature";
</script>

<Section>
  <Thumb {src} />
  <Thumb {src} count={8} />
  <Thumb count={88} />
</Section>
