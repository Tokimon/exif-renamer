<script lang="ts">
  import gearSvg from '~/ui/0_assets/svg/inline/animated/gear.svg?raw';
  import Overlay from '~/ui/2_base/overlay/Overlay.svelte';
  import { loading } from './LoadingOverlay.style';
</script>

<Overlay>
  <div class={loading}>
    {@html gearSvg}
    <slot />
  </div>
</Overlay>
