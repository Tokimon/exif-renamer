<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import randomId from '@jsfns/core/randomCryptoId';

  import { folderSelect, input, hider, help } from './FolderSelect.style';

  const id = 'FolderSelect-' + randomId(5);

  const dispatch = createEventDispatcher();

  $: folder = '';

  let showHelp = true;

  const onChange = (e: Event) => {
    const { files } = e.currentTarget as HTMLInputElement;
    showHelp = true;
    folder = '';

    if (!files?.length) return;

    const { path, name } = files[0];
    folder = path.replace(name, '');
    showHelp = false;

    dispatch('change', { folder, path });
  };
</script>

<!-- svelte-ignore component-name-lowercase -->
<div class={folderSelect}>
  <label for={id} class={input} title={folder}>
    <div class={hider}>
      <input type="file" {id} webkitDirectory on:change={onChange} />
    </div>
    {folder || 'Select folder'}
  </label>

  {#if showHelp}
    <div class={help}>Select a folder containing files</div>
  {/if}
</div>
