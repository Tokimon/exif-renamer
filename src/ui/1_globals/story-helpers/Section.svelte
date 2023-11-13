<script lang="ts">
  export let title: string = '';
</script>

<style>
  .header {
    font-size: 21px;
  }

  .body {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
</style>

{#if title}
  <h2 class="header">{title}</h2>
{/if}
<div class="body">
  <slot />
</div>
