<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { delegateHandler } from 'vanillajs-browser-helpers/delegate';

  import type { PathMapping } from '~/types/path.d';

  import Thumb from '~/ui/3_pieces/thumb/Thumb.svelte';
  import { thumb } from '~/ui/3_pieces/thumb/Thumb.style';

  import { list } from './FileList.style';

  export let paths: PathMapping = [];

  const dispatch = createEventDispatcher();

  const onClick = delegateHandler(`.${thumb}`, function () {
    dispatch('thumbclick', { thumb: this });
  });
</script>

<div class={list} on:click={onClick}>
  {#each paths as [src, count]}
    <Thumb {src} {count} data-path={src} />
  {/each}
</div>
