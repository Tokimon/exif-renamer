<script lang="ts" context="module">
  import type { Colors } from '~/ui/0_assets/theme/colors/types';
  import SvgIcon from '~/ui/2_base/svg-icon/SvgIcon.svelte';
  import type { ComponentProps } from 'svelte';
</script>

<script lang="ts">
  let _static: boolean = false;

  export { _static as static };
  export let icon: ComponentProps<SvgIcon>['svg'] | '' = '';
  export let disabled = false;
  export let noHover = false;
  export let color: Colors = 'primary';
  export let href = '';
  export let target = '';
  export let title = '';
  export let className = '';
  export let style = '';

  let canHover = true;
  $: canHover = !disabled && !noHover && !_static;
</script>

<style>
  .button {
    --color: var(--initial-color);

    padding: 0.5em;
    line-height: 1.4;
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
    transition-property: all;
    transition-duration: 0.2s;
    transition-timing-function: ease;
    will-change: background-color, opacity;
    background: var(--color);

    &.disabled {
      --color: color-mix(in oklch, var(--initial-color) 60%, white);
    }

    &:focus {
      outline: none;
    }

    & .content:empty {
      display: none;
    }

    & .svg-icon {
      width: 1.4em;
      fill: currentColor;
    }

    &:not(.no-hover) {
      cursor: pointer;

      &:hover,
      &:focus {
        --color: color-mix(in oklch, var(--initial-color) 85%, black);
      }
    }
  }
</style>

{#if disabled || _static}
  <span
    aria-disabled="{disabled}"
    class="button {className} static"
    class:disabled
    class:no-hover="{!canHover}"
    style:--initial-color="{`var(--${color})`}"
    {style}
    {title}
  >
    {#if icon}<SvgIcon svg="{icon}" />{/if}
    <span class="content"><slot /></span>
  </span>
{:else if href}
  <a {href} {target} style:--color="{`var(--${color})`}" {style} on:click class="button {className}" {title}>
    {#if icon}<SvgIcon svg="{icon}" />{/if}
    <span class="content"><slot /></span>
  </a>
{:else}
  <!-- svelte-ignore component-name-lowercase -->
  <button
    type="button"
    style:--initial-color="{`var(--${color})`}"
    {style}
    on:click
    on:mousedown
    on:mouseup
    on:mouseleave
    class="button {className}"
    class:no-hover="{!canHover}"
    {title}
  >
    {#if icon}<SvgIcon svg="{icon}" />{/if}
    <span class="content"><slot /></span>
  </button>
{/if}
