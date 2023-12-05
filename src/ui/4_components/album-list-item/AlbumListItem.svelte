<script lang="ts">
  import { findOneByQuery } from '@jsfns/web/findByQuery';
  import { createEventDispatcher } from 'svelte';
  import { longPress } from '~/ui/1_globals/actions/long-press';
  import IconButton from '~/ui/2_base/icon-button/IconButton.svelte';
  import TextInput from '~/ui/3_pieces/text-input/TextInput.svelte';

  import classNames from './album-list-item.module.css';

  export let name: string;

  const dispatch = createEventDispatcher();

  let editing = false;

  $: {
    if (editing) {
      requestAnimationFrame(() => findOneByQuery(`.${classNames.name} input`)?.focus());
    }
  }

  const onOpen = () => dispatch('open');
  const onAddTo = () => dispatch('add-to');
  const onDelete = () => dispatch('delete');

  const startEditing = () => (editing = true);
  const endEditing = () => (editing = false);

  const handleEditSubmit = (e: Event) => {
    name = (e.target as HTMLInputElement).value.trim();
    endEditing();
  };

  const handleEscape = (e: KeyboardEvent) => e.key === 'Escape' && (e.target as HTMLInputElement).blur();
</script>

<style>
  .album-list-item {
    display: flex;
    font-size: 2rem;
    gap: 0.5rem;
    align-items: center;
  }
</style>

<div class="album-list-item">
  <IconButton icon="folder-add" color="primary" style="font-size: inherit;" longpress="{600}" on:longpress="{onAddTo}" />

  {#if editing}
    <TextInput
      className="{classNames.name}"
      value="{name}"
      on:change="{handleEditSubmit}"
      on:keydown="{handleEscape}"
      on:blur="{endEditing}"
    />
  {:else}
    <button type="button" class="{classNames.name}" use:longPress="{600}" on:dblclick="{onOpen}" on:longpress="{startEditing}"
      >{name}</button
    >
  {/if}
  <IconButton icon="trash" color="danger" longpress="{1000}" on:longpress="{onDelete}" />
</div>
