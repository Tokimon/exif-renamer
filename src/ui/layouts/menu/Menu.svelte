<script context="module" lang="typescript">
  import MenuItem from "~/ui/components/menu-item/MenuItem.svelte";
  import searchFolderSvg from "~/ui/svg/icons/folder-search.svg";

  import { menu } from "./Menu.style";
</script>

<script lang="typescript">
  export let loadPath;
</script>

<div class={menu}>
  <MenuItem icon={searchFolderSvg} on:click={loadPath} />
</div>
