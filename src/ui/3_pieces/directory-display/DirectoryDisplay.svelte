<script lang="ts">
  import classnames from 'classnames';
  import SvgIcon from '~/ui/2_base/svg-icon/SvgIcon.svelte';

  import {
    header,
    icon,
    parentPart,
    folderName,
    noFolder,
  } from './DirectoryDisplay.style';

  export let path: string = '';
  export let style: string = '';

  let dir: string = '';
  let pathParent: string = '';

  $: {
    const unixPath = path.replaceAll('\\', '/').replace(/\/+$/, '');
    const lastSlashIndex = unixPath.lastIndexOf('/');

    dir = unixPath.slice(lastSlashIndex);
    pathParent = unixPath.slice(0, lastSlashIndex);
  }
</script>

<h1
  class={classnames(header, { [noFolder]: !dir })}
  tabindex="0"
  {style}
  on:click>
  <SvgIcon svg="folder" className={icon} />

  {#if pathParent}<span class={parentPart}>{pathParent}</span>{/if}
  <span class={folderName}>{dir || 'No folder selected ...'}</span>
</h1>
