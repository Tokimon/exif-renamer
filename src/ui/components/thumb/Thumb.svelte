<script>
  import { css } from 'emotion';

  import Image from 'ui/base/image/Image.svelte';
  import FocusDot from 'ui/base/focus-dot/FocusDot.svelte';

  export let src;
  export let count = 1;

  const thumb = css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  `;

  const dot = css`
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(-3px, -3px);
    z-index: 1;
  `;

  const container = css`
    position: relative;
    width: 100px;

    &::after {
      content: '';
      display: block;
      padding-top: 100%;
    }
  `;
</script>

<div class={container}>
  <Image class={thumb} {src} />
  {#if count > 1}<FocusDot class={dot}>{count}</FocusDot>{/if}
</div>
