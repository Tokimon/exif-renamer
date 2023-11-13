<script lang="ts" context="module">
  export type SelectionChangeEvent = { name: string; checked: boolean };
</script>

<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import type { ChangeEventHandler } from 'svelte/elements';
  import extensionToIcon from '~/ui/1_globals/core/extensionToIcon';
  import fileExtension from '~/ui/1_globals/utils/fileExtension';
  import FocusDot from '~/ui/2_base/focus-dot/FocusDot.svelte';
  import Image from '~/ui/2_base/image/Image.svelte';
  import PathString from '~/ui/2_base/path-string/PathString.svelte';

  import classNames from './FileTile.module.css';

  const dispatch = createEventDispatcher<{ 'selection-change': SelectionChangeEvent }>();

  export let name: string = '';
  export let thumbnail: string = '';
  export let count: number = 1;

  let extension = '';

  $: extension = fileExtension(name);

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { checked } = e.currentTarget;
    dispatch('selection-change', { name, checked: !!checked });
  };
</script>

<label class="{classNames['file-tile']}" title="{name}">
  <input type="checkbox" class="{classNames.checkbox}" on:change="{onChange}" />

  <div class="{classNames['file-image']}">
    <Image src="{thumbnail}" {extension} noImageIcon="{extensionToIcon(extension)}" />

    {#if count > 1}
      <FocusDot className="{classNames.dot}">{count}</FocusDot>
    {/if}
  </div>

  <PathString path="{name}" separator="." />
</label>
