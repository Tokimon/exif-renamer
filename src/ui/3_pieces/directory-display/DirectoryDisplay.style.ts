import { css } from '@emotion/css';

import { headline } from '~/ui/1_globals/theme/font';
import { color } from '~/ui/1_globals/theme/colors';



export const icon = css`
  width: 1em;
  height: 1em;
  padding: 0.2em 0 0 0.5em;
  flex: 0 0 auto;
  display: block;
  fill: ${color('primary')};
`;

export const folder = css`
  flex: 1 1 auto;
`;

export const container = css`
  ${headline}
  display: flex;
  margin: 0;
  transition: box-shadow 0.2s ease-out;
  align-items: center;
  overflow: hidden;

  &:hover {
    ${'.' + icon} {
      transform: translateX(0);
    }
  }
`;
