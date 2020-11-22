<script context="module" lang="typescript">
  import { cx } from '@emotion/css';

  import { container } from './FocusDot.style';
</script>

<script lang="typescript">
  const { class: className, ...rest } = $$restProps;
</script>

<div class={cx(container, className)} {...rest}>
  <slot />
</div>
