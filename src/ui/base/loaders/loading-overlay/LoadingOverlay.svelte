<script>
  import { css } from 'emotion';

  import gearSvg from 'svg/inline/animated/gear.svg';
  import { text } from 'ui/theme/text';
  import { pickColor, blacken } from 'ui/theme/colors';

  export let style;

  const container = css`
    ${text}
    font-size: 16px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: ${pickColor(blacken('text', 70), 85)};
    color: white;
    text-align: center;
    box-sizing: border-box;

    svg {
      width: 70px;
      height: 70px;
      fill: white;
      margin: 10px;
    }
  `;
</script>

<div class='loading-overlay {container}' style={style}>
  {@html gearSvg}
  <slot />
</div>
