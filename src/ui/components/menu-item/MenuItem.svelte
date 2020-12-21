<script lang="ts">
  import classnames from 'classnames';

  import SvgIcon from '@/ui/base/svg-icon/SvgIcon.svelte';

  import { menuItem } from './MenuItem.style';

  export let icon: string = '';

  const { class: className, ...rest } = $$restProps;
</script>

<div class={classnames(menuItem, className)} on:click {...rest}>
  <SvgIcon svg={icon} />
  <slot />
</div>
