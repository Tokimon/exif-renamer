<script lang="ts">
  import classnames from 'classnames';

  import gearSvg from '~/ui/svg/inline/animated/gear.svg';

  import { loadingOverlay } from './LoadingOverlay.style';

  const { class: className, ...rest } = $$restProps;
</script>

<div class={classnames(loadingOverlay, className)} {...rest}>
  {@html gearSvg}
  <slot />
</div>
