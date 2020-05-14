<script>
  import { css } from 'emotion';

  import gearSvg from 'svg/inline/animated/gear.svg';
  import { text } from 'ui/base-css/text';

  export let style;

  const container = css`
    ${text}
    font-size: 16px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: rgba(56, 56, 56, 0.86);
    color: white;
    text-align: center;

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
