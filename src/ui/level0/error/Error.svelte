<script>
  import { css } from 'emotion';

  import { text } from 'ui/base-css/text';
  import SvgIcon from 'ui/level0/svg-icon/SvgIcon.svelte';

  import alertSvg from 'svg/icons/alert.svg';

  const className = css`
    ${text}
    color: red;
    display: flex;
    align-items: center;

    .svg-icon {
      width: 1em;
      height: 1em;
      margin-right: 5px;
    }
  `;
</script>

<div class={className}>
  <SvgIcon svg={alertSvg} />
  <slot />
</div>
