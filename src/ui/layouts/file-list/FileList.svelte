<script context="module" lang="typescript">
  import Thumb from "~/ui/components/thumb/Thumb.svelte";

  import { list } from "./FileList.style";
</script>

<script lang="typescript">
  export let paths = [];
</script>

<div class={list}>
  {#each paths as [src, count]}
    <Thumb {src} {count} />
  {/each}
</div>
