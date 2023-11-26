<script lang="ts">
  export let className: string = '';
  export let style: string = '';
</script>

<style>
  .focus-dot {
    font-size: 1rem;
    border-radius: 0.8rem;
    height: 1.6rem;
    min-width: 1.6rem;
    line-height: 1;
    padding: 0 5px;
    color: white;
    background: var(--secondary);
    display: inline-flex;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    font-weight: bold;
  }
</style>

<div class="focus-dot {className}" {style}>
  <slot />
</div>
