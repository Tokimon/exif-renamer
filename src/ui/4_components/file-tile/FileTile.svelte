<script lang="ts">
  import extensionToIcon from '~/ui/1_globals/core/extensionToIcon';
  import fileExtension from '~/ui/1_globals/utils/fileExtension';
  import FocusDot from '~/ui/2_base/focus-dot/FocusDot.svelte';
  import Image from '~/ui/2_base/image/Image.svelte';
  import PathString from '~/ui/2_base/path-string/PathString.svelte';

  import classNames from './FileTile.module.css';

  export let name: string = '';
  export let thumbnail: string = '';
  export let count: number = 1;
  export let selected: boolean = false;
  export let style: string = '';
  export let className: string = '';

  let extension = '';
  $: extension = fileExtension(name);
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions -->
<div class="{classNames['file-tile']} {className}" aria-selected="{selected}" title="{name}" {style} on:click>
  <div class="{classNames['image-area']}">
    <Image src="{thumbnail}" className="{classNames.image}" {extension} noImageIcon="{extensionToIcon(extension)}" />
  </div>

  {#if count > 1}
    <FocusDot className="{classNames.dot}">{count}</FocusDot>
  {/if}

  <PathString path="{name}" className="{classNames.name}" separator="." />
</div>
