<script lang="ts">
  import classnames from 'classnames';

  import SvgIcon from '~/ui/base/svg-icon/SvgIcon.svelte';

  import { image, icon } from './Image.style';

  export let src: string;
  export let alt: string = '';
  export let noImageIcon: string;

  const { class: className, ...rest } = $$restProps;

  $: failed = !src;

  const handleError = () => {
    failed = true;
  };
</script>

{#if !failed}
  <img
    class={classnames('img', image, className)}
    {src}
    {alt}
    on:error={handleError}
    {...rest} />
{:else}
  <div class={classnames('no-img', icon, className)} {...rest}>
    <SvgIcon svg={noImageIcon} />
  </div>
{/if}
