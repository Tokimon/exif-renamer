import { css } from '~/ui/1_globals/core/css';
import { text } from '~/ui/1_globals/theme/font';
import {
  color as themeColor,
  blacken,
  whiten,
} from '~/ui/1_globals/theme/colors';

export const button = css`
  ${text}
  padding: 0 0.5em;
  height: 2em;
  display: inline-flex;
  align-items: center;
  gap: 0.5em;
  justify-content: center;
  border-radius: 0.4em;
  cursor: default;
  color: white;
  white-space: nowrap;
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

  :empty {
    display: none;
  }

  .svg-icon {
    width: 1em;
    height: 1em;
    fill: currentColor;
  }
`;

const hoverStyle = (color: string) => css`
  cursor: pointer;

  &:hover,
  &:focus {
    background: ${blacken(color, 25)};
  }
`;

export const buttonColor = (color: string, _static?: boolean): string => css`
  background: ${themeColor(color)};

  &[aria-disabled] {
    background: ${whiten(color, 60)};
  }

  ${!_static && hoverStyle(color)}
`;
