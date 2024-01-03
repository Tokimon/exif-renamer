<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import HollowButton from '~/ui/2_base/hollow-button/HollowButton.svelte';

  const dispatch = createEventDispatcher();
  const onEdit = () => dispatch('edit-albums');
  const onAdd = () => dispatch('add-album');
</script>

<style>
  header {
    display: flex;
    align-items: center;
    gap: 1rem;

    & > .button {
      font-size: 1.5rem;
    }
  }

  h2 {
    flex: 1 1 100%;
    color: var(--light-text);
  }
</style>

<header>
  <h2>Albums</h2>
  <HollowButton icon="edit" color="light-text" hoverColor="valid" style="" on:click="{onEdit}" />
  <HollowButton icon="add" color="light-text" hoverColor="primary" style="" on:click="{onAdd}" />
</header>
