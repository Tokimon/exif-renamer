<script lang="ts">
  import classnames from 'classnames';
  import SvgIcon from '~/ui/2_base/svg-icon/SvgIcon.svelte';

  import { button, buttonColor } from './button.style';

  export let icon: string = '';
  export let disabled: boolean = false;
  export let color: string = 'primary';
  export let href: string = '';
  export let target: string = '';
  export let className: string = '';

  const colors = buttonColor(color);
  const cn = classnames(button, colors, className);
</script>

{#if disabled}
  <span aria-disabled="true" class={cn}>
    {#if icon}<SvgIcon svg={icon} />{/if}
    {#if $$slots.default}<span><slot /></span>{/if}
  </span>
{:else if href}
  <a {href} {target} on:click class={cn}>
    {#if icon}<SvgIcon svg={icon} />{/if}
    {#if $$slots.default}<span><slot /></span>{/if}
  </a>
{:else}
  <!-- svelte-ignore component-name-lowercase -->
  <button type="button" on:click class={cn}>
    {#if icon}<SvgIcon svg={icon} />{/if}
    {#if $$slots.default}<span><slot /></span>{/if}
  </button>
{/if}
