<script lang="ts">
  import SvgIcon from '~/ui/2_base/svg-icon/SvgIcon.svelte';

  import { menuItem } from './MenuItem.style';

  export let icon: string = '';
</script>

<div class={menuItem} on:click>
  <SvgIcon svg={icon} />
  <slot />
</div>
