<script lang="ts">
  import Overlay from '~/ui/2_base/overlay/Overlay.svelte';
  import gearSvg from '~/ui/0_assets/svg/inline/animated/gear.svg';

  import { loading } from './LoadingOverlay.style';
</script>

<Overlay>
  <div class={loading}>
    {@html gearSvg}
    <slot />
  </div>
</Overlay>
