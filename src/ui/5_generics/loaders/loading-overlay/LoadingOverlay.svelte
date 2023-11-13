<script lang="ts">
  import gearSvg from '~/ui/0_assets/svg/inline/animated/gear.svg?raw';
  import Overlay from '~/ui/2_base/overlay/Overlay.svelte';
</script>

<style>
  .loading-overlay {
    display: flex;
    flex-direction: column;
    font-size: 1.6rem;
    color: white;
    text-align: center;
    box-sizing: border-box;

    & svg {
      width: 70px;
      height: 70px;
      fill: white;
      margin: 10px;
    }
  }
</style>

<Overlay>
  <div class="loading-overlay">
    {@html gearSvg}
    <slot />
  </div>
</Overlay>
