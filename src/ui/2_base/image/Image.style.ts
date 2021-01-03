import { css } from '~/ui/1_globals/utils/css';
import { whiten } from '~/ui/1_globals/theme/colors';



export const image = css`
  display: block;
  object-fit: cover;
  object-position: 50% 50%;
`;

export const icon = css`
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