<script lang="ts">
  import SvgIcon from '~/ui/2_base/svg-icon/SvgIcon.svelte';
  import PathString from '~/ui/2_base/path-string/PathString.svelte';

  import { container, icon, folder } from './DirectoryDisplay.style';

  export let path: string = '';
  export let style: string = '';

  $: unixPath = path.replaceAll('\\', '/').replace(/\/+$/, '');
</script>

<h1 class={container} tabindex="0" {style} on:click>
  <SvgIcon svg="folder" className={icon} />
  <PathString
    className={folder}
    path={unixPath}
    placeholder="No folder selected ..." />
</h1>
