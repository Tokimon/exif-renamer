<script lang="ts">
  import { bar, pctText, pctTextReveal, loadbar } from './Loadbar.style';

  export let value = 0;
  export let total = 0;
  export let style = '';

  const pct = (value / total) * 100;
</script>

<div class={loadbar} {style}>
  <div class={pctText}>{value} / {total}</div>
  <div class={bar} style="width: {pct}%;" />
  <div class={pctTextReveal} style="clip-path: inset(0 {100 - pct}% 0 0);">
    {value}
    /
    {total}
  </div>
</div>
