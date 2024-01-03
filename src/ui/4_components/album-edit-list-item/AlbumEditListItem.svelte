<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import IconButton from '~/ui/2_base/icon-button/IconButton.svelte';
  import SvgIcon from '~/ui/2_base/svg-icon/SvgIcon.svelte';
  import NameInput from '~/ui/3_pieces/name-input/NameInput.svelte';

  import classNames from './AlbumEditListItem.module.css';

  export let name: string;

  const dispatch = createEventDispatcher();

  const onDelete = () => dispatch('delete', name);
  const handleEditSubmit = (e: CustomEvent) => dispatch('change-name', e.detail);
</script>

<style>
  .album-edit-list-item {
    display: flex;
    font-size: 2rem;
    gap: 0.5rem;
    align-items: center;
    padding: 0 0.5rem;
    transition: background 0.2s ease;

    & > .svg-icon {
      width: 1.4em;
      fill: currentColor;
    }

    &:has(input:focus) > .svg-icon {
      fill: var(--primary);
    }
  }
</style>

<!-- svelte-ignore a11y-label-has-associated-control -->
<label class="album-edit-list-item">
  <SvgIcon svg="folder" />

  <NameInput value="{name}" className="{classNames.name}" on:change="{handleEditSubmit}" style="background: none;" />

  <IconButton icon="trash" color="danger" longpress="{1000}" on:longpress="{onDelete}" />
</label>
