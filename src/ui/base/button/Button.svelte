<script lang="ts">
  import classnames from 'classnames';

  import { button, buttonColor } from './button.style';

  export let disabled: boolean = false;
  export let color: string = 'primary';
  export let href: string = '';
  export let target: string = '';

  const colors = buttonColor(color);

  const cn = classnames(button, colors);
</script>

{#if disabled}
  <span aria-disabled="true" class={cn}>
    <slot />
  </span>
{:else if href}
  <a {href} {target} on:click class={cn}>
    <slot />
  </a>
{:else}
  <!-- svelte-ignore component-name-lowercase -->
  <button type="button" on:click class={cn}>
    <slot />
  </button>
{/if}
