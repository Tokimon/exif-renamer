<script lang="ts">
  import type { ComponentProps } from 'svelte';
  import Button from '~/ui/2_base/button/Button.svelte';

  import classNames from './NavButton.module.css';

  export let icon: ComponentProps<Button>['icon'];
  export let color: ComponentProps<Button>['color'] = 'primary';
  export let disabled: ComponentProps<Button>['disabled'] = false;
  export let style = '';
  export let className = '';
</script>

<Button {icon} className="{classNames['nav-button']} {className}" {color} {disabled} {style} on:click>
  <slot />
</Button>
