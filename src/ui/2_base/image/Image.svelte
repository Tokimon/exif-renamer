<script lang="ts">
  import classnames from 'classnames';

  import fileExtension from '~/ui/1_globals/utils/fileExtension';
  import extensionToIcon from '~/ui/1_globals/utils/extensionToIcon';
  import isWebImage from '~/ui/1_globals/utils/isWebImage';
  import SvgIcon from '~/ui/2_base/svg-icon/SvgIcon.svelte';

  import { image, noImage } from './Image.style';

  export let src = '';
  export let alt = '';
  export let extension = '';
  export let noImageIcon: string | null = '';
  export let className = '';
  export let style = '';

  let ext = '';
  let fileIcon: string | null = null;
  let failed = false;

  $: failed = !src;
  $: {
    ext = extension || fileExtension(src);
    fileIcon = noImageIcon || extensionToIcon(ext);
  }

  const handleError = () => {
    failed = true;
  };
</script>

{#if !failed && isWebImage(src)}
  <img
    class={classnames('img', image, className)}
    {style}
    {src}
    {alt}
    on:error={handleError} />
{:else}
  <div class={classnames('no-img', noImage, className)} {style}>
    <SvgIcon svg={fileIcon || 'question-circle'} />
    <b>.{ext}</b>
  </div>
{/if}
