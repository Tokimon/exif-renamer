<script lang="ts">
  import SvgIcon from '~/ui/2_base/svg-icon/SvgIcon.svelte';

  export let id = '';
  export let icon = '';
  export let active = false;
</script>

<style>
  .menu-item {
    font-size: 1.4rem;
    position: relative;
    color: var(--primary);
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 10px;
    border-radius: 4px;
    gap: 10px;
    border: none;
    background: transparent;
    transition:
      background-color 0.2s,
      color 0.2s;

    & .svg-icon {
      width: 16px;
      height: 16px;
      fill: currentColor;
    }

    &:hover,
    &:focus,
    &.active {
      background: var(--primary);
      color: white;
    }
  }
</style>

<button type="button" data-id="{id}" class="menu-item" class:active on:click>
  <SvgIcon svg="{icon}" />
  <slot />
</button>
