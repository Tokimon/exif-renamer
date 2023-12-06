<script lang="ts">
  import { findOneByQuery } from '@jsfns/web/findByQuery';
  import { createEventDispatcher } from 'svelte';
  import { longPress } from '~/ui/1_globals/actions/long-press';
  import IconButton from '~/ui/2_base/icon-button/IconButton.svelte';
  import NameInput from '~/ui/3_pieces/name-input/NameInput.svelte';

  import classNames from './album-list-item.module.css';

  export let name: string;

  const dispatch = createEventDispatcher();

  let editing = false;

  $: {
    if (editing) requestAnimationFrame(() => findOneByQuery(`.${classNames.name} input`)?.focus());
  }

  const onOpen = () => dispatch('open', name);
  const onAddTo = () => dispatch('add-to', name);
  const onDelete = () => dispatch('delete', name);

  const startEditing = () => (editing = true);
  const endEditing = () => (editing = false);

  const handleEditSubmit = (e: CustomEvent) => {
    endEditing();
    dispatch('name-update', e.detail);
  };

  const handleEscape = (e: KeyboardEvent) => e.key === 'Escape' && (e.target as HTMLInputElement).blur();
</script>

<style>
  .album-list-item {
    display: flex;
    font-size: 2rem;
    gap: 0.5rem;
    align-items: center;
    border-radius: 0.4rem;
    padding: 0 0.5rem;
    background: rgb(0 0 0 / 10%);
    transition: background 0.2s ease;

    &:hover {
      background: rgb(255 255 255 / 30%);
    }
  }
</style>

<div class="album-list-item">
  <IconButton icon="folder-add" hoverColor="primary" style="font-size: inherit;" longpress="{600}" on:longpress="{onAddTo}" />

  {#if editing}
    <NameInput
      value="{name}"
      className="{classNames.name}"
      on:change="{handleEditSubmit}"
      on:keydown="{handleEscape}"
      on:blur="{endEditing}"
    />
  {:else}
    <button type="button" class="{classNames.name}" use:longPress="{600}" on:dblclick="{onOpen}" on:longpress="{startEditing}">
      {name}
    </button>
  {/if}

  <IconButton icon="trash" color="danger" longpress="{1000}" on:longpress="{onDelete}" />
</div>
