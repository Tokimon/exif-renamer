<script lang="ts">
  import extensionToIcon from '~/ui/1_globals/core/extensionToIcon';
  import fileExtension from '~/ui/1_globals/utils/fileExtension';
  import isWebImage from '~/ui/1_globals/utils/isWebImage';
  import SvgIcon from '~/ui/2_base/svg-icon/SvgIcon.svelte';

  export let src = '';
  export let alt = '';
  export let extension = '';
  export let noImageIcon: string = '';
  export let className = '';
  export let style = '';

  let ext = '';
  let failed = false;

  $: failed = !src;
  $: ext = extension || fileExtension(src);

  const handleError = () => {
    failed = true;
  };
</script>

<style>
  .image {
    display: block;
    object-fit: cover;
    object-position: 50% 50%;
  }

  .no-image {
    background: color-mix(in oklch, var(--text) 13%, white);
    color: color-mix(in oklch, var(--text) 70%, white);
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    & svg {
      fill: currentColor;
      width: 80%;
      max-width: 50px;
      aspect-ratio: 1;
    }

    & b {
      font-family: 'Courier new', monospace;
      font-size: 12px;
      font-weight: normal;
    }
  }
</style>

{#if !failed && isWebImage(src)}
  <img class="image {className}" {style} {src} {alt} on:error="{handleError}" />
{:else}
  <div class="no-image {className}" {style}>
    <SvgIcon svg="{noImageIcon || extensionToIcon(ext)}" />
    <b>.{ext}</b>
  </div>
{/if}
