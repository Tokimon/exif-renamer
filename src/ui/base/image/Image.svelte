<script context="module" lang="ts">
  import classnames from 'classnames';

  import SvgIcon from '~/ui/svg/svg-icon/SvgIcon.svelte';

  import { image as imageCn, icon } from './Image.style';
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
    class={classnames('img', imageCn, className)}
    {src}
    {alt}
    on:error={handleError}
    {...rest} />
{:else}
  <div class={classnames('no-img', icon, className)} {...rest}>
    <SvgIcon svg="landscape" />
  </div>
{/if}
