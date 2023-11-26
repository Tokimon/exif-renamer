<script lang="ts">
  import type { FileInfo } from '~/types/file';
  import isImage from '~/ui/1_globals/utils/isImage';
  import Button from '~/ui/2_base/button/Button.svelte';
  import Image from '~/ui/2_base/image/Image.svelte';
  import DateInput from '~/ui/3_pieces/date-input/DateInput.svelte';
  import SizeInput from '~/ui/3_pieces/size-input/SizeInput.svelte';
  import TagInput from '~/ui/3_pieces/tag-input/TagInput.svelte';
  import TextInput from '~/ui/3_pieces/text-input/TextInput.svelte';

  export let files: FileInfo[] = [];
  export let style = '';

  let isSingle = false;
  $: isSingle = files.length < 2;
</script>

<style>
  .panel {
    width: 28rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 1.5rem;
    background: white;
    border-radius: 0 1rem 1rem 0;
    box-sizing: border-box;
    box-shadow: 3px 4px 10px gray;
  }

  .buttons {
    display: flex;
    justify-content: flex-end;
    border-bottom: 1px solid lightgray;
    padding-bottom: 1.5rem;
  }

  :global(.thumbnail) {
    align-self: center;
    width: 20rem;
    aspect-ratio: 1;
    border-radius: 1rem;
  }
</style>

<div class="panel" {style}>
  <div class="buttons">
    <!-- <Button icon="launch" color="valid">One by one</Button> -->
    <Button icon="trash" color="danger" style="flex-direction: row-reverse; flex: 1;">
      Delete {files.length === 1 ? `"${files[0].name}"` : `all (${files.length})`}
    </Button>
  </div>

  <DateInput title="Date" name="date" withTime="{isSingle}" />

  <TagInput title="Tags" name="tags" />

  <TextInput title="Location" name="location" />

  {#if isSingle && isImage(files[0]?.paths[0] ?? '')}
    <SizeInput title="Size" name="size" />

    <Image className="thumbnail" src="{files[0]?.thumbnail ?? ''}" />
  {/if}
</div>
