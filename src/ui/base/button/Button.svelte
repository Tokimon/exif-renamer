<script context="module" lang="typescript">
  import { cx } from '@emotion/css';

  import { button, buttonColor } from './button.style';
</script>

<script lang="typescript">
  export let disabled: boolean = false;
  export let href: string;
  export let color: string = 'primary';

  const { class: className, ...rest } = $$restProps;

  const colors = buttonColor(color);

  const props = {
    ...rest,
    class: cx(button, colors, className),
  };
</script>

{#if disabled}
  <span aria-disabled="true" {...props}>
    <slot />
  </span>
{:else if href}
  <a {href} on:click {...props}>
    <slot />
  </a>
{:else}
  <button type="button" on:click {...props}>
    <slot />
  </button>
{/if}
