<script lang="ts">
  import type { ComponentProps } from 'svelte';
  import Button from '~/ui/2_base/button/Button.svelte';
  import { omitEvents } from '~/ui/1_globals/utils/omitEvents';

  import classNames from './HollowButton.module.css';

  type $$Props = ComponentProps<Button>;

  const { className = '', ...rest } = omitEvents<$$Props>($$props);
</script>

<Button
  className="hollow-button {classNames['hollow-button']} {className}"
  {...rest}
  on:click
  on:mousedown
  on:mouseup
  on:mouseenter
  on:mouseleave
  on:dblclick
  on:longpress
>
  <slot />
</Button>
