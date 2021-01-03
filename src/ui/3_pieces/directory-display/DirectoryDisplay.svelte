<script lang="ts">
  import SvgIcon from '~/ui/base/svg-icon/SvgIcon.svelte';

  import { header, icon } from './DirectoryDisplay.style';

  export let path: string = '';

  const unixPath = path.replaceAll('\\', '/').replace(/\/+$/, '');

  const lastSlashIndex = unixPath.lastIndexOf('/');
  const pathParent = unixPath.slice(0, lastSlashIndex);
  const dir = unixPath.slice(lastSlashIndex);
</script>

<h1 class={header} tabindex="0">
  <SvgIcon svg="open-folder" className={icon} />

  <span>{pathParent}</span>
  <span>{dir}</span>
</h1>
