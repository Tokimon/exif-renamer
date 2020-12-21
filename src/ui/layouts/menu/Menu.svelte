<script lang="ts">
  import classnames from 'classnames';
  import { createEventDispatcher } from 'svelte';
  import { delegateHandler } from 'vanillajs-browser-helpers/delegate';

  import MenuItem from '@/ui/components/menu-item/MenuItem.svelte';
  import { menuItem } from '@/ui/components/menu-item/MenuItem.style';

  import { menu } from './Menu.style';

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
  <MenuItem icon="folder-search" data-context="search">Search</MenuItem>
</div>
