import { css } from '@emotion/css';

import { blacken } from '~/ui/theme/colors';


export const thumb = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const dot = css`
  position: absolute;
  right: 0;
  bottom: 0;
  transform: translate(-6px, -6px);
  z-index: 1;
  box-shadow: inset 0 2px 2px ${blacken('secondary', 40)};
`;

export const container = css`
  position: relative;
  width: 100px;

  &::after {
    content: '';
    display: block;
    padding-top: 100%;
  }
`;