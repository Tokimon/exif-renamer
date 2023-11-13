<script lang="ts">
  import SvgIcon from '~/ui/2_base/svg-icon/SvgIcon.svelte';
  import PathString from '~/ui/2_base/path-string/PathString.svelte';

  import { icon, folder, display } from './DirectoryDisplay.module.css';

  export let path: string = '';
  export let style: string = '';

  $: unixPath = path.replaceAll('\\', '/').replace(/\/+$/, '');
</script>

<style>
</style>

<button type="button" class="{display} headline" {style} on:click>
  <SvgIcon svg="folder" className="{icon}" />
  <PathString className="{folder}" path="{unixPath}" placeholder="No folder selected ..." />
</button>
