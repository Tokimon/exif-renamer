<script lang="ts">
  import gearSvg from '~/ui/0_assets/svg/inline/animated/gear.svg?raw';
  import Overlay from '~/ui/2_base/overlay/Overlay.svelte';

  import classNames from './LoadingOverlay.module.css';

  export let overlay: HTMLDivElement | undefined;
</script>

<Overlay bind:overlay className="{classNames['loading-overlay']}">
  {@html gearSvg}
  <slot />
</Overlay>
