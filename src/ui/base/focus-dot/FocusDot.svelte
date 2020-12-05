<script lang="ts">
  import classnames from 'classnames';

  import { container } from './FocusDot.style';

  const { class: className, ...rest } = $$restProps;
</script>

<div class={classnames(container, className)} {...rest}>
  <slot />
</div>
