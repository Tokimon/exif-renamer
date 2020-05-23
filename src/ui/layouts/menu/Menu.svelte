<script context='module'>
  import { css } from 'emotion';

  import { whiten } from 'ui/theme/colors.js';
  import MenuItem from 'ui/components/menu-item/MenuItem.svelte';
  import searchFolderSvg from 'ui/svg/icons/folder-search.svg';

  const container = css`
    position: relative;
    width: 40px;
    padding-right: 5px;
    border-right: 1px solid ${whiten('text', 80)};
  `;
</script>

<script>
  export let loadPath;
</script>

<div class={container}>
  <MenuItem icon={searchFolderSvg} on:click={loadPath} />
</div>
