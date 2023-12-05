<script lang="ts">
  import { deletedFileStore } from '~/ui/1_globals/stores/fileInfoStore';
  import FocusDot from '~/ui/2_base/focus-dot/FocusDot.svelte';
  import IconButton from '~/ui/2_base/icon-button/IconButton.svelte';

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

    & .button {
      font-size: 2rem;
    }

    & .trash-count {
      z-index: 1;
      translate: 0 3px;
      place-self: center;
      pointer-events: none;
    }

    &.disabled .trash-count {
      opacity: 0.7;
    }
  }
</style>

<div class="trash-button {className}" class:disabled="{!deleteCount}" {style}>
  <IconButton icon="trash" color="text" hoverColor="danger" disabled="{!deleteCount}" on:click />

  {#if deleteCount}
    <FocusDot className="trash-count">
      {deleteCount}
    </FocusDot>
  {/if}
</div>
