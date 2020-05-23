<script context='module'>
  import { css } from 'emotion';

  import { colors, color, blacken } from 'ui/theme/colors.js';
  import { text } from 'ui/theme/text.js';
  import SvgIcon from 'ui/utility/svg-icon/SvgIcon.svelte';

  const container = css`
    ${text}
    position: relative;
    color: ${colors.primary};
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    padding: 5px;

    svg {
      width: 30px;
      height: 30px;
      fill: currentColor;
    }

    &:hover {
      background: ${colors.primary};
      color: white;
    }
  `;
</script>

<script>
  export let icon;

  const { class: className, ...rest } = $$restProps;
</script>

<div class='menu-item {container} {className}' on:click {...rest}>
  <SvgIcon svg={icon} />
</div>
