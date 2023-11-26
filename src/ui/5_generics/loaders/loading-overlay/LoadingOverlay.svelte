<script lang="ts">
  import gearSvg from '~/ui/0_assets/svg/inline/animated/gear.svg?raw';

  export let overlay: HTMLDivElement | undefined;

  const nonNativeProps: { popover?: boolean | 'manual' | 'auto' } = {
    popover: 'manual',
  };
</script>

<style>
  .loading-overlay {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    font-size: 1.6rem;
    color: white;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    background: rgb(10 10 10 / 80%);
    backdrop-filter: blur(8px);

    & svg {
      width: 70px;
      height: 70px;
      fill: white;
      margin: 10px;
    }
  }
</style>

<div bind:this="{overlay}" class="loading-overlay" {...nonNativeProps}>
  {@html gearSvg}
  <slot />
</div>
