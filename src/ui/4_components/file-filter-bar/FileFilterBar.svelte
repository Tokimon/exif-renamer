<script lang="ts">
  import type { FileInfo } from '~/types/file.d';

  export let files: FileInfo[] = [];
  export let selection: string[] = [];
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
  <div class="total-count">{files.length} Files</div>
  {#if selection.length}<div class="selection-count">{selection.length} Files selected</div>{/if}
</div>
