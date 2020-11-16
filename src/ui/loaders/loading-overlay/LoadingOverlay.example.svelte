<script lang="typescript">
  import { css } from "emotion";

  import Section from "~/ui/example-helpers/Section.svelte";

  import LoadingOverlay from "./LoadingOverlay.svelte";

  const Ex = css`
    width: 200px;
    height: 200px;
    background: url(https://placeimg.com/200/200/nature);

    > * {
      width: 100%;
      height: 100%;
    }
  `;
</script>

<Section>
  <div class={Ex}>
    <LoadingOverlay />
  </div>
  <div class={Ex}>
    <LoadingOverlay>Loading</LoadingOverlay>
  </div>
</Section>
