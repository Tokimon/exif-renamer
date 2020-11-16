import { css } from 'emotion';

import { text } from '~/ui/theme/text';
import { color as themeColor, blacken, whiten } from '~/ui/theme/colors';



export const button = css`
  ${text}
  padding: 0 10px;
  height: 30px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  cursor: default;
  color: white;
  text-transform: uppercase;
  transition: background-color 0.2s ease, opacity 0.2s ease;
  will-change: background-color, opacity;
  text-decoration: none;

  &:not(.disabled) {
    cursor: pointer;
  }
`;

export const buttonColor = (color: string): string => css`
  ${button} {
    background: ${whiten(color, 60)};
  
    &:not([aria-disabled="true"]) {
      background: ${themeColor(color)};
  
      &:hover {
        background: ${blacken(color, 15)};
      }
    }
  }
`;