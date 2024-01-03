<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import HollowButton from '~/ui/2_base/hollow-button/HollowButton.svelte';

  import classNames from './AlbumListItem.module.css';

  export let name: string;

  const dispatch = createEventDispatcher();

  const onAddTo = () => dispatch('add-to', name);
  const onOpen = () => dispatch('open', name);
</script>

<HollowButton
  className="{classNames['album']}"
  icon="folder-add"
  color="light-text"
  hoverColor="secondary"
  longpress
  on:longpress="{onAddTo}"
  on:dblclick="{onOpen}"
>
  {name}
</HollowButton>
