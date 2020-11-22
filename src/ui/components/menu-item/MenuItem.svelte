<script context="module" lang="ts">
  import { cx } from '@emotion/css';

  import SvgIcon from '~/ui/svg/svg-icon/SvgIcon.svelte';

  import { menuItem } from './MenuItem.style';
</script>

<script lang="ts">
  export let icon: string;

  const { class: className, ...rest } = $$restProps;
</script>

<div class={cx(menuItem, className)} on:click {...rest}>
  <SvgIcon svg={icon} />
  <slot />
</div>
