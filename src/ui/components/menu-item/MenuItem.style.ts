import { css } from '@emotion/css';

import { color, whiten, blacken } from '@/ui/theme/colors';
import { text } from '@/ui/theme/text';



export const menuItem = css`
  ${text}
  font-size: 16px;
  position: relative;
  color: ${color('primary')};
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 10px 20px;
  transition: background-color 0.2s, color 0.2s;

  svg {
    width: 16px;
    height: 16px;
    fill: currentColor;
    margin-right: 15px;
  }

  &:hover {
    background: ${whiten('primary', 80)};
    color: ${blacken('primary', 30)};
  }
`;
