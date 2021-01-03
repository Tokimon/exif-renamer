<script lang="ts">
  import SvgIcon from '~/ui/base/svg-icon/SvgIcon.svelte';

  import { menuItem } from './MenuItem.style';

  export let icon: string = '';
</script>

<div class={menuItem} on:click>
  <SvgIcon svg={icon} />
  <slot />
</div>
