import { css } from 'emotion';



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
  transform: translate(-3px, -3px);
  z-index: 1;
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