<script lang="ts">
  import { off } from '@jsfns/web/off';
  import { on } from '@jsfns/web/on';
  import { onDestroy, onMount } from 'svelte';
  import type { FileInfo } from '~/types/file';
  import { fileInfoStore, selectedFileStore } from '~/ui/1_globals/stores/fileInfoStore';
  import zoomStore from '~/ui/1_globals/stores/zoomStore';
  import FileTile from '~/ui/4_components/file-tile/FileTile.svelte';

  export let style = '';

  let files: FileInfo[] = [];

  const unsubscribe = fileInfoStore.subscribe((arr) => {
    files = arr.sort((a, b) => {
      const AName = a.name.toLowerCase();
      const BName = b.name.toLowerCase();

      return AName > BName ? 1 : AName === BName ? 0 : -1;
    });
  });

  onDestroy(unsubscribe);

  let currentIndex: undefined | number;

  function deselectAll() {
    $selectedFileStore = new Set([]);
  }

  function handleSelection(name: string, index: number) {
    return (e: MouseEvent) => {
      const set = $selectedFileStore;

      const prevIndex = currentIndex;
      currentIndex = index;

      if (e.shiftKey && prevIndex !== undefined) {
        const [from, to] = prevIndex > index ? [index, prevIndex] : [prevIndex, index];
        files.slice(from, to + 1).forEach(({ name }) => set.add(name));

        // $selectedFileStore = new Set(files.slice(from, to + 1).map(({ name }) => name));
      } else {
        const isSelected = set.has(name);

        if (isSelected) set.delete(name);
        else set.add(name);
      }
      $selectedFileStore = set;
    };
  }

  onMount(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') deselectAll();
    };

    on('keydown', handleEscape);

    return () => off('keydown', handleEscape);
  });
</script>

<style>
  .list {
    display: grid;
    grid-template-columns: repeat(auto-fit, calc(10rem * var(--pct, 100) / 100));
    justify-content: center;
    gap: 1rem;
    user-select: none;
    padding: 1rem;
  }
</style>

<div class="list" style:--pct="{$zoomStore}" {style}>
  {#each files as { name, thumbnail, count }, index (name)}
    <FileTile
      {name}
      {thumbnail}
      {count}
      selected="{$selectedFileStore.has(name)}"
      className="file"
      on:click="{handleSelection(name, index)}"
    />
  {/each}
</div>
