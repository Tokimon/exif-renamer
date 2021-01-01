import { css } from '~/ui/utils/css';

import { text } from '~/ui/theme/font';
import { color as themeColor, blacken, whiten } from '~/ui/theme/colors';



export const button = css`
  ${text}
  padding: 0 10px;
  height: 30px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  cursor: pointer;
  color: white;
  border: none;
  text-transform: uppercase;
  text-decoration: none;
  transition-property: background-color, opacity;
  transition-duration: 0.2s;
  transition-timing-function: ease;
  will-change: background-color, opacity;

  &:focus {
    outline: none;
  }

  &[aria-disabled] {
    cursor: default;
  }
`;

export const buttonColor = (color: string): string => css`
  &[aria-disabled] {
    background: ${whiten(color, 60)};
  }

  &:not([aria-disabled]) {
    background: ${themeColor(color)};

    &:hover, &:focus {
      background: ${blacken(color, 25)};
    }
  }
`;
