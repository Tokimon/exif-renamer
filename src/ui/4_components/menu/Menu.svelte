<script lang="ts">
  import type { IMenuItem } from '~/ui/3_pieces/menu-item/MenuItem.d';
  import MenuItem from '~/ui/3_pieces/menu-item/MenuItem.svelte';

  import { menu } from './Menu.style';

  export let menuItems: IMenuItem[] = [];
</script>

<nav class={menu}>
  {#each menuItems as { label, onClick, ...item }}
    <MenuItem on:click={onClick} {...item}>{label}</MenuItem>
  {/each}
</nav>
