<script context="module" lang="ts">
  import classnames from 'classnames';

  import { bar, pctText, pctTextReveal, loadbar } from './Loadbar.style';
</script>

<script lang="ts">
  export let value = 0;
  export let total = 0;

  const { class: className, ...rest } = $$restProps;

  $: pct = (value / total) * 100;
</script>

<div class={classnames(loadbar, className)} {...rest}>
  <div class={pctText}>{value} / {total}</div>
  <div class={bar} style="width: {pct}%;" />
  <div class={pctTextReveal} style="clip-path: inset(0 {100 - pct}% 0 0);">
    {value}
    /
    {total}
  </div>
</div>
