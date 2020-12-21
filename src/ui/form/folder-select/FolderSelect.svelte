<script lang="ts">
  import classnames from 'classnames';
  import { createEventDispatcher } from 'svelte';
  import randomId from 'vanillajs-helpers/randomId';

  import { folderSelect, input, hider, help } from './FolderSelect.style';

  const id = 'FolderSelect-' + randomId(5);

  const { class: className, ...rest } = $$restProps;

  const dispatch = createEventDispatcher();

  $: folder = '';

  let showHelp = true;

  const onChange = (e: Event) => {
    const input = e.currentTarget as HTMLInputElement;
    const { files } = input;
    showHelp = !files.length;
    folder = '';

    if (showHelp) {
      return;
    }

    const { path, name } = files[0];
    folder = path.replace(name, '');

    dispatch('change', { folder, path });
  };
</script>

<!-- svelte-ignore component-name-lowercase -->
<div class={classnames(className, folderSelect)} {...rest}>
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
