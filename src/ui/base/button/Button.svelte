<script lang="ts">
  import classnames from 'classnames';

  import { button, buttonColor } from './button.style';

  export let disabled: boolean = false;
  export let color: string = 'primary';
  export let href: string = '';
  export let target: string = '';

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
  <a {href} {target} on:click {...props}>
    <slot />
  </a>
{:else}
  <button type="button" on:click {...props}>
    <slot />
  </button>
{/if}
