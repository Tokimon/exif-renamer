<script>
  import { css } from 'emotion';

  import { text } from 'ui/theme/text';
  import colors from 'ui/theme/colors';

  import SvgIcon from 'ui/utility/svg-icon/SvgIcon.svelte';

  import alertSvg from 'svg/icons/alert.svg';

  const className = css`
    ${text}
    color: ${colors.danger};
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
