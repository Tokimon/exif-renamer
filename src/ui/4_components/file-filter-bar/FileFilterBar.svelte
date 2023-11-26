<script lang="ts">
  import { fileInfoStore, selectedFileStore } from '~/ui/1_globals/stores/fileInfoStore';

  export let style = '';
</script>

<style>
  .file-filter-bar {
    padding: 6px;
    border-bottom: 1px solid oklch(from var(--text) l c h / 30%);
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  .total-count {
    font-size: 2rem;
  }

  .selection-count {
    color: var(--secondary);
  }
</style>

<div class="file-filter-bar" {style}>
  <div class="total-count">{$fileInfoStore.length} Files</div>
  {#if $selectedFileStore.size}<div class="selection-count">{$selectedFileStore.size} Files selected</div>{/if}
</div>
