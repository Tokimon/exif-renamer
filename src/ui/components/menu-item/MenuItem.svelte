<script context="module" lang="typescript">
  import { cx } from "emotion";

  import SvgIcon from "~/ui/svg/svg-icon/SvgIcon.svelte";

  import { menuItem } from "./MenuItem.style";
</script>

<script lang="typescript">
  export let icon: string;

  const { class: className, ...rest } = $$restProps;
</script>

<div class={cx(menuItem, className)} on:click {...rest}>
  <SvgIcon svg={icon} />
</div>
