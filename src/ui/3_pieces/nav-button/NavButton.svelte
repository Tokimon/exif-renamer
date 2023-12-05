<script lang="ts">
  import { omitBy } from 'lodash';
  import type { ComponentProps } from 'svelte';
  import HollowButton from '~/ui/2_base/hollow-button/HollowButton.svelte';

  import classNames from './NavButton.module.css';

  type $$Props = ComponentProps<HollowButton>;

  const { className = '', color = 'primary', ...rest } = omitBy($$props, (_, key) => key.startsWith('event_'));
</script>

<HollowButton className="nav-button {classNames['nav-button']} {className}" color="text" hoverColor="{color}" {...rest} on:click>
  <slot />
</HollowButton>
