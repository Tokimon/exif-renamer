<style>
  .overlay {
    position: fixed;
    inset: 0;
    z-index: 9;
    padding: 1rem;
    display: grid;
    grid-template:
      [overlay-start] 2rem [content-start] 1fr [content-end] 2rem [overlay-end] /
      [overlay-start] 2rem [content-start] 1fr [content-end] 2rem [overlay-end];
    place-items: center;
    place-content: center;
  }

  .bg {
    background: oklch(from var(--text) l c h / 0.7);
    grid-area: overlay;
    width: 100%;
    height: 100%;
  }

  .content {
    grid-area: content;
  }
</style>

<div class="overlay">
  <!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions -->
  <div class="bg" on:click></div>
  <div class="content"><slot /></div>
</div>
