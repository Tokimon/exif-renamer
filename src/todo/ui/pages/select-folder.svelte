<script lang="typescript">
  import nPath from 'path';

  import { glob } from '../utils/glob.js';
  import isRWFolder from '../utils/is-rw-folder.js';
  import { load as loadCache, debounceSave, addFile } from '../utils/file-cache.js';

  import extensions from '../exif/extensions.json';
  import readMetadata from '../exif/read-metadata.js';

  import DropZone from '../ui/drop-zone.svelte';
  import FolderInput from '../ui/folder-input.svelte';
  import Loadbar from '../ui/loadbar.svelte';
  import Button from '../ui/button.svelte';
  import Error from '../ui/error.svelte';

  export let onFilesLoaded;

  let showDropZone;
  let selectedFolder;
  let loading = false;
  let folderOk = false;
  let total = 0;
  let count = 0;
  let error = null;

  const getFiles = async (folder) => {
    folder = nPath.join(folder, '**');
    const files = await glob({ folder, extensions });
    return files;
  };

  const onFileRead = (path, data) => {
    addFile(path, data);
    debounceSave(selectedFolder);
    count++;
  };

  const getMetadatas = async (folder) => {
    const files = await getFiles(folder);
    total = files.length;
    count = 0;

    if (total) {
      await loadCache(selectedFolder);
      const metas = await readMetadata(files, onFileRead);
      return metas;
    }
  };

  const onFolderSelect = async (f) => {
    selectedFolder = f;
    folderOk = false;
    error = null;

    const ok = await isRWFolder(f);

    if (!ok) {
      error = 'The path selected is not a directory with read and write access';
    } else {
      folderOk = true;
    }
  };

  const startReadingFolder = async () => {
    if (!folderOk) { return; }

    loading = true;

    const metas = await getMetadatas(selectedFolder);

    if (metas) {
      onFilesLoaded(metas);
    }

    loading = false;
  };
</script>

<style lang='stylus'>
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

  :global(.button) {
    margin-top: 15px;
  }

  .intro-page {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    color: white;
  }
</style>

<div class='intro-page'>
  {#if showDropZone}<DropZone />{/if}

  {#if !loading}
    <FolderInput folder={selectedFolder} {onFolderSelect} />
    <Button disabled={!folderOk} on:click={startReadingFolder}>Read folder</Button>
  {:else}
    <div class='loading'>
      Parsing files
      <Loadbar {count} {total} />
    </div>
  {/if}
  {#if error}<Error>{error}</Error>{/if}
</div>
