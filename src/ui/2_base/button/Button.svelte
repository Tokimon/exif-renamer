<script lang="ts" context="module">
  import type { Colors } from '~/ui/0_assets/theme/colors/types';
  import SvgIcon from '~/ui/2_base/svg-icon/SvgIcon.svelte';
</script>

<script lang="ts">
  let _static: boolean = false;

  export { _static as static };
  export let icon = '';
  export let disabled = false;
  export let color: Colors = 'primary';
  export let href = '';
  export let target = '';
  export let className = '';

  const style = `--color: var(--${color});`;
</script>

<style>
  .button {
    padding: 0 0.5em;
    height: 2em;
    display: inline-flex;
    align-items: center;
    gap: 0.5em;
    justify-content: center;
    border-radius: 0.4em;
    cursor: default;
    color: white;
    white-space: nowrap;
    border: none;
    text-transform: uppercase;
    text-decoration: none;
    transition-property: background-color, opacity;
    transition-duration: 0.2s;
    transition-timing-function: ease;
    will-change: background-color, opacity;
    background: var(--color);

    &[disabled],
    &[aria-disabled='true'] {
      background: color-mix(in oklch, var(--color) 60%, white);
    }

    &:focus {
      outline: none;
    }

    & .content:empty {
      display: none;
    }

    & .svg-icon {
      width: 1em;
      height: 1em;
      fill: currentColor;
    }

    &:not(.static) {
      cursor: pointer;

      &:hover,
      &:focus {
        background: color-mix(in oklch, var(--color) 85%, black);
      }
    }
  }
</style>

{#if disabled || _static}
  <span aria-disabled="{disabled}" class="button {className} static" {style}>
    {#if icon}<SvgIcon svg="{icon}" />{/if}
    <span class="content"><slot /></span>
  </span>
{:else if href}
  <a {href} {target} {style} on:click class="button {className}">
    {#if icon}<SvgIcon svg="{icon}" />{/if}
    <span class="content"><slot /></span>
  </a>
{:else}
  <!-- svelte-ignore component-name-lowercase -->
  <button type="button" {style} on:click class="button {className}">
    {#if icon}<SvgIcon svg="{icon}" />{/if}
    <span class="content"><slot /></span>
  </button>
{/if}
