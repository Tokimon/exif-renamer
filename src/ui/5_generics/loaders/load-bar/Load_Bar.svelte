<script lang="ts">
  export let value = 0;
  export let total = 0;
  export let style = '';

  let pct = 0;
  $: pct = (value / total) * 100;
</script>

<style>
  .bar {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 1;
    background: var(--primary);
  }

  .pct-text,
  .pct-text-reveal {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color: var(--text);
  }

  .pct-text-reveal {
    z-index: 2;
    color: white;
  }

  .load-bar {
    position: relative;
    box-shadow: inset 0 0 0 2px color-mix(in oklch, var(--text) 40, white);
    border-radius: 10px;
    height: 40px;
    overflow: hidden;
  }
</style>

<div class="load-bar" {style}>
  <div class="pct-text">{value} / {total}</div>
  <div class="bar" style="width: {pct}%;"></div>
  <div class="pct-text-reveal" style="clip-path: inset(0 {100 - pct}% 0 0);">
    {value}
    /
    {total}
  </div>
</div>
