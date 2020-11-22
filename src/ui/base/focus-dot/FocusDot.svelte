<script context="module" lang="ts">
  import { cx } from '@emotion/css';

  import { container } from './FocusDot.style';
</script>

<script lang="ts">
  const { class: className, ...rest } = $$restProps;
</script>

<div class={cx(container, className)} {...rest}>
  <slot />
</div>
