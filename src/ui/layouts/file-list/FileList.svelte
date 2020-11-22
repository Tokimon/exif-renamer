<script context="module" lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { delegateHandler } from 'vanillajs-browser-helpers/delegate';

  import Thumb from '~/ui/components/thumb/Thumb.svelte';
  import { thumb } from '~/ui/components/thumb/Thumb.style';

  import { list } from './FileList.style';
</script>

<script lang="ts">
  export let paths = [];

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
