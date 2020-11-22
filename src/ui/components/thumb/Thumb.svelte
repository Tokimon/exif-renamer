<script context="module" lang="ts">
  import Image from '~/ui/base/image/Image.svelte';
  import FocusDot from '~/ui/base/focus-dot/FocusDot.svelte';

  import { thumb, dot, image } from './Thumb.style';
</script>

<script lang="ts">
  export let src: string;
  export let count: number = 1;
</script>

<div class={thumb} tabindex="0">
  <Image class={image} {src} title={src} />

  {#if count > 1}
    <FocusDot class={dot}>{count}</FocusDot>
  {/if}
</div>
