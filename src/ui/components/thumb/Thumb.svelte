<script context="module" lang="typescript">
  import Image from "~/ui/base/image/Image.svelte";
  import FocusDot from "~/ui/base/focus-dot/FocusDot.svelte";

  import { thumb, dot, container } from "./Thumb.style";
</script>

<script lang="typescript">
  export let src: string;
  export let count: number = 1;
</script>

<div class={container}>
  <Image class={thumb} {src} />

  {#if count > 1}
    <FocusDot class={dot}>{count}</FocusDot>
  {/if}
</div>
