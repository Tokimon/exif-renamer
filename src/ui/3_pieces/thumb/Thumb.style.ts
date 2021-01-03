import { css } from '~/ui/1_globals/utils/css';
import { color } from '~/ui/1_globals/theme/colors';



export const image = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity 0.2s, filter 0.2s;
`;

export const dot = css`
  position: absolute;
  right: 0;
  bottom: 0;
  transform: translate(-6px, -6px);
  z-index: 1;
`;

export const thumb = css`
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 4px;
  overflow: hidden;
  transition: background 0.2s;

  &:hover, &:focus {
    background: ${color('primary')};

    ${'.' + image} {
      filter: grayscale(1);
      opacity: 0.6;
    }
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${color('secondary')}
  }
`;
