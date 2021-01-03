<script lang="ts">
  import gearSvg from '~/ui/svg/inline/animated/gear.svg';

  import { loadingOverlay } from './LoadingOverlay.style';
</script>

<div class={loadingOverlay}>
  {@html gearSvg}
  <slot />
</div>
