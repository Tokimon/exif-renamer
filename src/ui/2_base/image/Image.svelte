<script lang="ts">
  import extensionToIcon from '~/ui/1_globals/core/extensionToIcon';
  import fileExtension from '~/ui/1_globals/utils/fileExtension';
  import isWebImage from '~/ui/1_globals/utils/isWebImage';
  import SvgIcon from '~/ui/2_base/svg-icon/SvgIcon.svelte';
  import { type IconNames } from '~/ui/0_assets/svg/icons';

  export let src: string;
  export let alt = '';
  export let extension = '';
  export let noImageIcon: IconNames | '' = '';
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
    display: grid;
    align-items: center;
    container-type: inline-size;

    & svg {
      fill: currentColor;
      padding: clamp(3px, 10%, 1rem);
      grid-area: 1 / 1;
    }

    & b {
      font-family: 'Courier new', monospace;
      grid-area: 1 / 1;
      text-align: center;
      font-size: max(1.2rem, 15cqw);
      font-weight: bolder;
      text-shadow: 0 0 0.3em black;
      background: rgb(163 162 162 / 70%);
      color: white;
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
