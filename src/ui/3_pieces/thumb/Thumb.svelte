<script lang="ts">
  import Image from '~/ui/2_base/image/Image.svelte';
  import FocusDot from '~/ui/2_base/focus-dot/FocusDot.svelte';

  import { thumb, dot, image } from './Thumb.style';

  export let src: string = '';
  export let count: number = 1;
</script>

<div class={thumb} tabindex="0">
  <Image className={image} {src} title={src} />

  {#if count > 1}
    <FocusDot className={dot}>{count}</FocusDot>
  {/if}
</div>
