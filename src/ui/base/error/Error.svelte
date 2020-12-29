<script lang="ts">
  import classnames from 'classnames';

  import SvgIcon from '~/ui/base/svg-icon/SvgIcon.svelte';

  import { error } from './Error.style';

  const { class: className, ...rest } = $$restProps;
</script>

<div class={classnames(error, className)} {...rest}>
  <SvgIcon svg="alert" />
  <slot />
</div>
