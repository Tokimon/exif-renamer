<script lang="ts">
  import { omitBy } from 'lodash';
  import type { ComponentProps } from 'svelte';
  import { omitEvents } from '~/ui/1_globals/utils/omitEvents';
  import Button from '~/ui/2_base/button/Button.svelte';

  import classNames from './IconButton.module.css';

  type $$Props = ComponentProps<Button>;

  const { className = '', color = 'light-text', ...rest } = omitEvents<$$Props>($$props);
</script>

<Button
  className="icon-button {classNames['icon-button']} {className}"
  {color}
  {...omitBy(rest, (_, key) => key.startsWith('event_'))}
  on:click
  on:mousedown
  on:mouseup
  on:dblclick
  on:longpress
/>
