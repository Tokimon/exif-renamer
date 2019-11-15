<script>
  export let folder;
  export let onFolderSelect;

  let showHelp;

  const onChange = (e) => {
    const input = e.target;
    const { files } = input;
    showHelp = !files.length;

    if (showHelp) { return; }

    const { path, name } = files[0];
    onFolderSelect(path.replace(name, ''))
  }
</script>

<style lang='stylus'>
  .container {
    display: flex;
    flex-direction: column;
    color: white;
  }

  .input {
    display: flex;
    align-items: center;
    height: 60px;
    padding: 10px;
    border: 2px solid silver;
    border-radius: 10px;
    transition: background-color 0.2s linear;
    cursor: pointer;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 28px;

    &:hover {
      background: rgba(255, 255, 255, 0.4);
    }

    &.error {
      border-color: red;
    }
  }

  .hider {
    width: 0;
    height: 0;
    overflow: hidden;
  }

  .help {
    padding: 10px 0;
  }
</style>

<div class='container folder-input'>
  <label class='input' title={folder}>
    <div class='hider'><input type='file' webkitDirectory on:change={onChange} /></div>
    {folder || 'Select folder'}
  </label>

  {#if showHelp}<div class='help'>Select a folder containing files</div>{/if}
</div>
