<script context="module" lang="typescript">
  import { cx } from 'emotion';

  import { button, buttonColor } from './button.style';
</script>

<script lang="typescript">
  export let disabled: boolean = false;
  export let href: string;
  export let color: string = 'primary';

  const { class: className, ...rest } = $$restProps;

  const colors = buttonColor(color);

  const classNames = cx(button, colors, className);
</script>

{#if disabled}
  <span class={classNames} aria-disabled="true" {...rest}>
    <slot />
  </span>
{:else if href}
  <a class={classNames} {href} on:click {...rest}>
    <slot />
  </a>
{:else if href}
  <button type="button" class={classNames} on:click {...rest}>
    <slot />
  </button>
{/if}
