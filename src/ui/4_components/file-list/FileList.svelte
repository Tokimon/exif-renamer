<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { delegateHandler } from 'vanillajs-browser-helpers/delegate';

  import type { FileInfo } from '~/types/file.d';

  import FileTile from '~/ui/4_components/file-tile/FileTile.svelte';
  import { container as fileTileContainer } from '~/ui/4_components/file-tile/FileTile.style';

  import { list } from './FileList.style';

  export let files: FileInfo[] = [];

  const dispatch = createEventDispatcher();

  const onClick = delegateHandler(`.${fileTileContainer}`, function () {
    dispatch('thumbclick', { thumb: this });
  });
</script>

<div class={list} on:click={onClick}>
  {#each files as file}
    <FileTile {...file} />
  {/each}
</div>
