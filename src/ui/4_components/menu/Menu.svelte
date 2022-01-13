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
  import { delegateHandler } from 'vanillajs-browser-helpers/delegate';
  import { menuItem } from '~/ui/3_pieces/menu-item/MenuItem.style';
  import MenuItem from '~/ui/3_pieces/menu-item/MenuItem.svelte';
  import { menu } from './Menu.style';

  export let items: MenuItemData[] = [];

  const dispatch = createEventDispatcher();

  const onClick = delegateHandler(`.${menuItem}`, (e: Event) => {
    const { delegateTarget: item } = e as Event & { delegateTarget: HTMLElement };
    dispatch('itemclick', { item, id: item.dataset.id });
  });
</script>

<nav class={menu} on:click={onClick}>
  {#each items as { label, id, ...rest }}
    <MenuItem id={id} {...rest}>{label}</MenuItem>
  {/each}
</nav>
