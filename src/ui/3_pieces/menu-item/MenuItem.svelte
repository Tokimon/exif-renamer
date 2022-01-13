<script lang="ts">
  import SvgIcon from '~/ui/2_base/svg-icon/SvgIcon.svelte';
  import classnames from 'classnames';
  import { menuItem } from './MenuItem.style';

  export let id = '';
  export let icon = '';
  export let active = false;
</script>

<div data-id={id} class={classnames(menuItem, { active })} on:click>
  <SvgIcon svg={icon} />
  <slot />
</div>
