<script lang="ts">
  import FocusDot from '~/ui/2_base/focus-dot/FocusDot.svelte';
  import PathString from '~/ui/2_base/path-string/PathString.svelte';
  import SvgIcon from '~/ui/2_base/svg-icon/SvgIcon.svelte';

  import { counter, display, folder, icon } from './DirectoryDisplay.module.css';

  export let path: string = '';
  export let count: number = 0;
  export let className: string = '';
  export let style: string = '';

  $: unixPath = path.replaceAll('\\', '/').replace(/\/+$/, '');
</script>

<style>
</style>

<button type="button" class="{display} {className}" {style} on:click>
  <SvgIcon svg="folder" className="{icon}" />
  {#if unixPath}<FocusDot className="{counter}">{count}</FocusDot>{/if}
  <PathString className="{folder}" path="{unixPath}" placeholder="No folder selected ..." />
</button>
