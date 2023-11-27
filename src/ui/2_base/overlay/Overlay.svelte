<script lang="ts">
  export let overlay: HTMLDivElement | undefined;
  export let style = '';
  export let className = '';

  const nonNativeProps: { popover?: boolean | 'manual' | 'auto' } = {
    popover: true,
  };
</script>

<style>
  .overlay {
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    background: rgb(10 10 10 / 80%);
    backdrop-filter: blur(8px);

    &:popover-open {
      display: flex;
    }
  }
</style>

<div bind:this="{overlay}" class="overlay {className}" {style} {...nonNativeProps}>
  <slot />
</div>
