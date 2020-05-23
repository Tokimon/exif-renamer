<script>
  import { css, cx } from 'emotion';

	import SvgIcon from 'ui/utility/svg-icon/SvgIcon.svelte';
  import { colors, whiten } from 'ui/theme/colors';

  import landscapeSvg from 'ui/svg/icons/landscape.svg';

  export let src;
  export let alt;
  export let fit = 'cover';

  const { class: className, ...rest } = $$restProps;

  $: failed = !src;

  const handleError = () => { failed = true; };

  const image = css`
    display: block;
    object-fit: ${fit};
    object-position: 50% 50%;
  `;

  const icon = css`
    display: inline-flex;
    background: ${whiten('text', 87)};

    svg {
      margin: auto;
      fill: ${whiten('text', 30)};
      max-width: 25px;
      max-height: 25px;
      width: 80%;
      height: 80%;
    }
  `;
</script>

{#if !failed}
  <img
    class={cx('img', image, className)}
    src={src}
    alt={alt}
    on:error={handleError}
    {...rest}
  />
{:else}
  <div class={cx('no-img', icon, className)} {...rest}>
    <SvgIcon svg={landscapeSvg} />
  </div>
{/if}
