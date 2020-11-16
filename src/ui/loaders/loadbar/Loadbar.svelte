<script context="module" lang="typescript">
  import { cx } from "emotion";

  import { bar, pctText, pctTextReveal, loadbar } from "./Loadbar.style";
</script>

<script lang="typescript">
  export let value = 0;
  export let total = 0;

  const { class: className, ...rest } = $$restProps;

  $: pct = (value / total) * 100;
</script>

<div class={cx(loadbar, className)} {...rest}>
  <div class={pctText}>{value} / {total}</div>
  <div class={bar} style="width: {pct}%;" />
  <div class={pctTextReveal} style="clip-path: inset(0 {100 - pct}% 0 0);">
    {value}
    /
    {total}
  </div>
</div>
