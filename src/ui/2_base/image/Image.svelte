<script lang="ts">
  import classnames from 'classnames';

  import SvgIcon from '~/ui/base/svg-icon/SvgIcon.svelte';

  import { image, icon } from './Image.style';

  export let src: string = '';
  export let alt: string = '';
  export let noImageIcon: string = '';
  export let style: string = '';

  $: failed = !src;

  const handleError = () => {
    failed = true;
  };
</script>

{#if !failed}
  <img
    class={classnames('img', image)}
    {style}
    {src}
    {alt}
    on:error={handleError} />
{:else}
  <div class={classnames('no-img', icon)} {style}>
    <SvgIcon svg={noImageIcon} />
  </div>
{/if}
