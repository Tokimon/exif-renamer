import { css } from 'emotion';

import { whiten } from '~/ui/theme/colors.js';



export const menu = css`
  position: relative;
  width: 40px;
  padding-right: 5px;
  border-right: 1px solid ${whiten('text', 80)};
`;