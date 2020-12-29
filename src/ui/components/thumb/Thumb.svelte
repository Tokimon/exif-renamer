<script lang="ts">
  import classnames from 'classnames';

  import Image from '~/ui/base/image/Image.svelte';
  import FocusDot from '~/ui/base/focus-dot/FocusDot.svelte';

  import { thumb, dot, image } from './Thumb.style';

  export let src: string = '';
  export let count: number = 1;

  const { class: className, ...rest } = $$restProps;
</script>

<div class={classnames(thumb, className)} tabindex="0">
  <Image class={image} {src} title={src} {...rest} />

  {#if count > 1}
    <FocusDot class={dot}>{count}</FocusDot>
  {/if}
</div>
