<script>
  import { css } from 'emotion';

  import gearSvg from 'ui/svg/inline/animated/gear.svg';
  import { text } from 'ui/theme/text';
  import { colors } from 'ui/theme/colors';

  const { class: className, ...rest } = $$restProps;

  const container = css`
    ${text}
    font-size: 20px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    box-sizing: border-box;
    color: ${colors.primary};

    svg {
      width: 50px;
      height: 50px;
      fill: currentColor;
      margin: 10px;
    }
  `;
</script>

<div class='loading-overlay {container} {className}' {...rest}>
  {@html gearSvg}
  <slot />
</div>
