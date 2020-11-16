<script context="module" lang="typescript">
  import { cx } from "emotion";

  import gearSvg from "~/ui/svg/inline/animated/gear.svg";

  import { loadingOverlay } from "./LoadingOverlay.style";
</script>

<script lang="typescript">
  const { class: className, ...rest } = $$restProps;
</script>

<div class={cx(loadingOverlay, className)} {...rest}>
  {@html gearSvg}
  <slot />
</div>
