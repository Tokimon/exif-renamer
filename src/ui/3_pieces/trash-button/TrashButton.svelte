<script lang="ts">
  import { deletedFileStore } from '~/ui/1_globals/stores/fileInfoStore';
  import FocusDot from '~/ui/2_base/focus-dot/FocusDot.svelte';
  import NavButton from '~/ui/3_pieces/nav-button/NavButton.svelte';

  export let style = '';
  export let className = '';

  let deleteCount = 0;
  $: deleteCount = $deletedFileStore.size;
</script>

<style>
  .trash-button {
    display: grid;
    width: fit-content;

    & .button,
    & .trash-count {
      grid-area: 1 / 1;
    }

    & .trash-count {
      z-index: 1;
      translate: 0 3px;
      place-self: center;
      pointer-events: none;
    }
  }
</style>

<div class="trash-button {className}" {style}>
  <NavButton icon="trash" color="danger" disabled="{!deleteCount}" on:click />

  {#if deleteCount}
    <FocusDot className="trash-count">
      {deleteCount}
    </FocusDot>
  {/if}
</div>
