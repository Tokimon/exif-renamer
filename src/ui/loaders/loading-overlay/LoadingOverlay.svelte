<script lang="typescript">
  import { css } from 'emotion';

  import gearSvg from '~/ui/svg/inline/animated/gear.svg';
  import { text } from '~/ui/theme/text';
  import { color, blacken } from '~/ui/theme/colors';

  const { class: className, ...rest } = $$restProps;

  const container = css`
    ${text}
    font-size: 16px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: ${color(blacken('text', 70), 85)};
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

<div class='loading-overlay {container} {className}' {...rest}>
  {@html gearSvg}
  <slot />
</div>
