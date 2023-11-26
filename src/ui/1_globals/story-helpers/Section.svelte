<script lang="ts">
  export let title: string = '';
  export let gridMin: number | undefined = undefined;
  export let style: string = '';
</script>

<style>
  .header {
    font-size: 21px;
  }

  .body {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    &.grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(var(--grid-min), max-content));
    }
  }
</style>

{#if title}
  <h2 class="header">{title}</h2>
{/if}
<section class="body" class:grid="{!!gridMin}" style="--grid-min: {gridMin}px; {style}">
  <slot />
</section>
