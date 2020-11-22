<script context="module" lang="ts">
  import { cx } from '@emotion/css';

  import SvgIcon from '~/ui/svg/svg-icon/SvgIcon.svelte';

  import { image, icon } from './Image.style';
</script>

<script lang="ts">
  export let src: string;
  export let alt: string = '';

  const { class: className, ...rest } = $$restProps;

  $: failed = !src;

  const handleError = () => {
    failed = true;
  };
</script>

{#if !failed}
  <img
    class={cx('img', image, className)}
    {src}
    {alt}
    on:error={handleError}
    {...rest} />
{:else}
  <div class={cx('no-img', icon, className)} {...rest}>
    <SvgIcon svg="landscape" />
  </div>
{/if}
