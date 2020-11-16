<script context="module" lang="typescript">
  import gearSvg from "~/ui/svg/inline/animated/gear.svg";

  import { loadingPage } from "./LoadingPage.style";
</script>

<script lang="typescript">
  const { class: className, ...rest } = $$restProps;
</script>

<div class="loading-overlay {loadingPage} {className}" {...rest}>
  {@html gearSvg}
  <slot />
</div>
