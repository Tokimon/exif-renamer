<script context="module" lang="ts">
  import classnames from 'classnames';
  import { createEventDispatcher } from 'svelte';
  import { delegateHandler } from 'vanillajs-browser-helpers/delegate';

  import MenuItem from '~/ui/components/menu-item/MenuItem.svelte';
  import { menuItem } from '~/ui/components/menu-item/MenuItem.style';
  import searchFolderSvg from '~/ui/svg/icons/folder-search.svg';

  import { menu } from './Menu.style';
</script>

<script lang="ts">
  const { class: className, ...rest } = $$restProps;

  const dispatch = createEventDispatcher();

  const onClick = delegateHandler(`.${menuItem}`, function () {
    dispatch('itemclick', {
      elm: this,
      context: this.dataset.context,
    });
  });
</script>

<div class={classnames(menu, className)} on:click={onClick} {...rest}>
  <MenuItem icon={searchFolderSvg.id || searchFolderSvg} data-context="search">
    Search
  </MenuItem>
</div>
