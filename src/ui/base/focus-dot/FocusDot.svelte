<script context="module" lang="ts">
  import classnames from 'classnames';

  import { container } from './FocusDot.style';
</script>

<script lang="ts">
  const { class: className, ...rest } = $$restProps;
</script>

<div class={classnames(container, className)} {...rest}>
  <slot />
</div>
