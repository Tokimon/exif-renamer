<script lang="ts">
  import classnames from 'classnames';
  import SvgIcon from '~/ui/2_base/svg-icon/SvgIcon.svelte';

  import { button, buttonColor } from './button.style';

  let _static: boolean = false;

  export let label: string = '';
  export let icon: string = '';
  export let disabled: boolean = false;
  export { _static as static };
  export let color: string = 'primary';
  export let href: string = '';
  export let target: string = '';
  export let className: string = '';

  const colors = buttonColor(color, disabled || _static);
  const cn = classnames(button, colors, className);
</script>

{#if disabled || _static}
  <span {...(disabled ? { 'aria-disabled': true } : {})} class={cn}>
    {#if icon}<SvgIcon svg={icon} />{/if}
    {#if label}<span>{label}</span>{/if}
  </span>
{:else if href}
  <a {href} {target} on:click class={cn}>
    {#if icon}<SvgIcon svg={icon} />{/if}
    {#if label}<span>{label}</span>{/if}
  </a>
{:else}
  <!-- svelte-ignore component-name-lowercase -->
  <button type="button" on:click class={cn}>
    {#if icon}<SvgIcon svg={icon} />{/if}
    {#if label}<span>{label}</span>{/if}
  </button>
{/if}
