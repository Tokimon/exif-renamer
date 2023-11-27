<script context="module" lang="ts">
  export interface MenuItemData {
    icon: string;
    label: string;
    id: string;
    active?: boolean;
  }
</script>

<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import MenuItem from '~/ui/3_pieces/menu-item/MenuItem.svelte';

  export let items: MenuItemData[] = [];

  // on:click={onClick}
  // const dispatch = createEventDispatcher();

  // const onClick = (e: Event) => {
  //   const item = (e.target as HTMLElement).closest<HTMLElement>(`.${menuItem}`);
  //   item && dispatch('itemclick', { item, id: item.dataset.id });
  // };
</script>

<style>
  .menu {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 2px;
    padding: 5px;
  }
</style>

<nav class="menu">
  {#each items as { label, id, ...rest }}
    <MenuItem {id} {...rest}>{label}</MenuItem>
  {/each}
</nav>
