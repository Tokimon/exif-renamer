<script context="module" lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { delegateHandler } from 'vanillajs-browser-helpers/delegate';

  import MenuItem from '~/ui/components/menu-item/MenuItem.svelte';
  import { menuItem } from '~/ui/components/menu-item/MenuItem.style';
  import searchFolderSvg from '~/ui/svg/icons/folder-search.svg';

  import { menu } from './Menu.style';
</script>

<script lang="ts">
  const dispatch = createEventDispatcher();

  const onClick = delegateHandler(`.${menuItem}`, function () {
    dispatch('itemclick', {
      elm: this,
      context: this.dataset.context,
    });
  });
</script>

<div class={menu} on:click={onClick}>
  <MenuItem icon={searchFolderSvg.id || searchFolderSvg} data-context="search">
    Search
  </MenuItem>
</div>
