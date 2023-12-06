<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import HollowButton from '~/ui/2_base/hollow-button/HollowButton.svelte';

  const dispatch = createEventDispatcher();
  const onAdd = () => dispatch('add-album');
</script>

<style>
  header {
    display: flex;
    align-items: center;
  }

  h2 {
    flex: 1 1 100%;
  }
</style>

<header>
  <h2>Albums</h2>
  <HollowButton icon="add" color="text" hoverColor="primary" style="font-size: 2rem; padding: 0.2em;" on:click="{onAdd}" />
</header>
