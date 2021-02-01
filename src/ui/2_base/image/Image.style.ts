import { css } from '~/ui/1_globals/core/css';
import { whiten } from '~/ui/1_globals/theme/colors';



export const bg = whiten('text', 87);

export const image = css`
  display: block;
  object-fit: cover;
  object-position: 50% 50%;
`;

export const noImage = css`
  background: ${bg};
  color: ${whiten('text', 30)};
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  svg {
    fill: currentColor;
    max-width: 50px;
    max-height: 50px;
    width: 80%;
    height: 80%;
  }

  b {
    font-family: "Courier new", monospace;
    font-size: 12px;
    font-weight: normal;
    text-indent: -0.6em;
  }
`;