import { css } from 'emotion';

import { colors } from '~/ui/theme/colors.js';
import { text } from '~/ui/theme/text.js';



export const menuItem = css`
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
