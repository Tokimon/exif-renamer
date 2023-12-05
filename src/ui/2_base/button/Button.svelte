<script lang="ts" context="module">
  import type { ComponentProps } from 'svelte';
  import type { Colors } from '~/ui/0_assets/theme/colors/types';
  import { longPress } from '~/ui/1_globals/actions/long-press';
  import SvgIcon from '~/ui/2_base/svg-icon/SvgIcon.svelte';
</script>

<script lang="ts">
  let _static: boolean = false;

  export { _static as static };
  export let icon: ComponentProps<SvgIcon>['svg'] | '' = '';
  export let disabled = false;
  export let noHover = false;
  export let color: Colors = 'primary';
  export let hoverColor: Colors | '' = '';
  export let href = '';
  export let target = '';
  export let title = '';
  export let longpress = 0;
  export let className = '';
  export let style = '';

  const [longPressAction, longPressDuration] = longpress ? [longPress, longpress] : [() => {}, 0];

  let canHover = true;
  $: canHover = !disabled && !noHover && !_static;
</script>

<style>
  .button {
    --color: var(--initial-color);

    appearance: none;
    overflow: hidden;
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
    background: var(--color);

    &.disabled {
      opacity: 0.7;
    }

    &:focus {
      outline: none;
    }

    & .content {
      display: block;
      overflow: hidden;

      &:empty {
        display: none;
      }
    }

    & .svg-icon {
      width: 1.4em;
      fill: currentColor;
    }

    &:not(.no-hover) {
      cursor: pointer;

      &:hover,
      &:focus {
        --color: var(--hover-color, color-mix(in oklch, var(--initial-color) 85%, black));
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
    style:--hover-color="{hoverColor ? `var(--${hoverColor})` : ''}"
    {style}
    {title}
  >
    {#if icon}<SvgIcon svg="{icon}" />{/if}
    <span class="content"><slot /></span>
  </span>
{:else if href}
  <a
    class="button {className}"
    class:no-hover="{!canHover}"
    style:--initial-color="{`var(--${color})`}"
    style:--hover-color="{hoverColor ? `var(--${hoverColor})` : ''}"
    use:longPressAction="{longPressDuration}"
    {href}
    {target}
    {style}
    {title}
    on:click
    on:mousedown
    on:mouseup
    on:mouseenter
    on:mouseleave
    on:dblclick
    on:longpress
  >
    {#if icon}<SvgIcon svg="{icon}" />{/if}
    <span class="content"><slot /></span>
  </a>
{:else}
  <!-- svelte-ignore component-name-lowercase -->
  <button
    type="button"
    class="button {className}"
    class:no-hover="{!canHover}"
    style:--initial-color="{`var(--${color})`}"
    style:--hover-color="{hoverColor ? `var(--${hoverColor})` : ''}"
    use:longPressAction="{longPressDuration}"
    {style}
    {title}
    on:click
    on:mousedown
    on:mouseup
    on:mouseenter
    on:mouseleave
    on:dblclick
    on:longpress
  >
    {#if icon}<SvgIcon className="button-icon" svg="{icon}" />{/if}
    <span class="content"><slot /></span>
  </button>
{/if}
