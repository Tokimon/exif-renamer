<script lang="ts">
  import type { FileInfo } from '~/types/file.d';
  import FileTile, { type SelectionChangeEvent } from '~/ui/4_components/file-tile/FileTile.svelte';

  export let files: FileInfo[] = [];
  export let selection: string[] = [];

  let selected = new Set<string>();
  function onSelectChange(e: CustomEvent<SelectionChangeEvent>) {
    const { name, checked } = e.detail;

    if (checked) selected.add(name);
    else selected.delete(name);

    selection = Array.from(selected);
  }
</script>

<style>
  .list {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
</style>

<div class="list">
  {#each files as { name, count, thumbnail }}
    <FileTile {name} {count} {thumbnail} on:selection-change="{onSelectChange}" />
  {/each}
</div>
