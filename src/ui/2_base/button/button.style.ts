import { css } from '~/ui/1_globals/core/css';
import { text } from '~/ui/1_globals/theme/font';
import { color as themeColor, blacken, whiten } from '~/ui/1_globals/theme/colors';


export const button = css`
  ${text}
  padding: 0 0.5em;
  height: 2.2em;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.4em;
  cursor: pointer;
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

  &[aria-disabled] {
    cursor: default;
  }

  > * {
    margin: 0 0.25em;
    display: inline-block;

    &:empty {
      display: none;
    }
  }

  .svg-icon {
    width: 1em;
    height: 1em;
    fill: currentColor;
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
