<script lang="ts">
  import { uniqueArray } from '@jsfns/core/uniqueArray';
  import { addClass } from '@jsfns/web/addClass';
  import { off } from '@jsfns/web/off';
  import { on } from '@jsfns/web/on';
  import { removeClass } from '@jsfns/web/removeClass';
  import Button from '~/ui/2_base/button/Button.svelte';
  import InputWrap from '~/ui/2_base/input-wrap/InputWrap.svelte';
  import NameInput from '~/ui/3_pieces/name-input/NameInput.svelte';

  import { input, remove, tag } from './TagInput.module.css';

  export let title = '';
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

  const onInputChange = (e: CustomEvent) => {
    updateTags([...tagsArr, e.detail.name]);
    e.detail.input.value = '';
  };

  const removeTag = (tag: string) => updateTags(tagsArr.filter((tagText) => tagText !== tag));
</script>

<InputWrap {title}>
  {#each tagsArr as tagName}
    <span class="{tag}">
      {tagName}
      <Button icon="trash" noHover className="{remove}" longpress="{600}" on:longpress="{() => removeTag(tagName)}" />
    </span>
  {/each}

  <NameInput names="{tagsArr}" className="{input}" placeholder="Add tag" on:change="{onInputChange}" />
</InputWrap>
