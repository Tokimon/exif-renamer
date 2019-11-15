<script>
  import nPath from 'path';

  import { glob } from '../utils/glob.js';
  import extensions from '../exif/extensions.json';
  import readMetadata from '../exif/read-metadata.js';
  import DropZone from '../ui/drop-zone.svelte';
  import FolderInput from '../ui/folder-input.svelte';
  import Loadbar from '../ui/loadbar.svelte';

  export let onFilesLoaded;

  let showDropZone;
  let selectedFolder;
  let loading = false;
  let total = 0;
  let count = 0;

  const getFiles = async (folder) => {
    folder = nPath.join(folder, '**');
    const files = await glob({ folder, extensions });
    return files;
  };

  async function metadata(folder) {
    if (loading) { return; }

    loading = true;

    const files = await getFiles(folder);
    total = files.length;
    count = 0;

    if (total) {
      const metas = await readMetadata(files, () => { count++; });
      onFilesLoaded(metas);
    }

    loading = false;
  }

  const onFolderSelect = (f) => {
    selectedFolder = f;
    metadata(f);
  };
</script>

<style lang='stylus'>
  :global(.intro-page) {}

  :global(.folder-input), .loading {
    width: 100%;
    max-width: 500px;
  }

  :global(.drop-zone) {
    position: absolute !important;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    color: white;
  }
</style>

<div class='container intro-page'>
  {#if showDropZone}<DropZone />{/if}

  {#if !loading}
    <FolderInput folder={selectedFolder} {onFolderSelect} />
  {:else}
    <div class='loading'>
      Parsing files
      <Loadbar {count} {total} />
    </div>
  {/if}
</div>
