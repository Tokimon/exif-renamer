<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { delegateHandler } from 'vanillajs-browser-helpers/delegate';
  import type { FileInfo } from '~/types/file.d';
  import { container as fileTileContainer } from '~/ui/4_components/file-tile/FileTile.style';
  import FileTile from '~/ui/4_components/file-tile/FileTile.svelte';
  import { list } from './FileList.style';

  export let files: FileInfo[] = [];

  const dispatch = createEventDispatcher();

  const onClick = delegateHandler(`.${fileTileContainer}`, (e: Event) => {
    const { delegateTarget: thumb } = e as Event & { delegateTarget: Element };
    dispatch('thumbclick', { thumb });
  });
</script>

<div class={list} on:click={onClick}>
  {#each files as { name, count, thumbnail }}
    <FileTile {name} {count} {thumbnail} />
  {/each}
</div>
