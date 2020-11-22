<script context="module" lang="ts">
  import classnames from 'classnames';

  import { button, buttonColor } from './button.style';
</script>

<script lang="ts">
  export let disabled: boolean = false;
  export let href: string;
  export let color: string = 'primary';

  const { class: className, ...rest } = $$restProps;

  const colors = buttonColor(color);

  const props = {
    ...rest,
    class: classnames(button, colors, className),
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
