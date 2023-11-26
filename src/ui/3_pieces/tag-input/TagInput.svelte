<script lang="ts">
  import { uniqueArray } from '@jsfns/core/uniqueArray';
  import { addClass } from '@jsfns/web/addClass';
  import { off } from '@jsfns/web/off';
  import { on } from '@jsfns/web/on';
  import { removeClass } from '@jsfns/web/removeClass';
  import type { ChangeEventHandler } from 'svelte/elements';
  import Button from '~/ui/2_base/button/Button.svelte';
  import InputWrap from '~/ui/2_base/input-wrap/InputWrap.svelte';

  import { input, remove, tag } from './TagInput.module.css';

  export let title = '';
  export let name = '';
  export let tags = '';

  let tagsArr: string[] = [];
  $: tagsArr = uniqueArray(
    tags
      .split(',')
      .map((t) => t.trim())
      .filter((t) => !!t),
  );

  const updateTags = (newTags: string[]) => {
    tagsArr = uniqueArray(newTags);
    tags = tagsArr.join(',');
  };

  const onInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const input = e.currentTarget;
    updateTags([...tagsArr, input.value.trim()]);
    input.value = '';
  };

  const onTagMouseDown = (e: MouseEvent, tag: string) => {
    const btn = e.currentTarget as HTMLElement;
    addClass(btn, 'trigger');

    let toId: NodeJS.Timeout;
    const cancel = () => {
      removeClass(btn, 'trigger');
      clearTimeout(toId);
    };

    toId = setTimeout(() => {
      updateTags(tagsArr.filter((tagText) => tagText !== tag));
      off(btn, cancel);
    }, 600);

    on('mouseup', cancel, { once: true });
  };
</script>

<InputWrap {title}>
  {#each tagsArr as tagText}
    <span class="{tag}">
      {tagText}
      <Button icon="trash" noHover className="{remove}" on:mousedown="{(e) => onTagMouseDown(e, tagText)}" />
    </span>
  {/each}

  <input {name} class="{input}" placeholder="Add tag" type="text" on:change="{onInputChange}" />
</InputWrap>
