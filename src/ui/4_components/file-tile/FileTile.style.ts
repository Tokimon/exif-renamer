import { css } from '~/ui/1_globals/utils/css';
import { color, whiten } from '~/ui/1_globals/theme/colors';



export const dot = css`
  position: absolute;
  right: 6px;
  top: 75px;
  z-index: 1;
  background: var(--highlight-color);
`;

export const image = css`
  --highlight-color: ${color('secondary')};

  width: 100%;
  height: 100px;
  border-radius: 4px;
  overflow: hidden;

  .img, .no-img {
    width: 100%;
    height: 100%;
  }
`;



const imageClass = '.' + image;

const focus = `
  --highlight-color: ${color('primary')};
  box-shadow: 0 0 0 3px var(--highlight-color);
`;

const selected = `
  box-shadow: 0 0 0 3px var(--highlight-color);

  & > .img {
    filter: grayscale(0.7) contrast(0.3) brightness(1.6);
  }

  & > .no-img {
    background: ${whiten('primary', 45)};
  }
`;



export const checkbox = css`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: 0;

  &:checked {
    & + ${imageClass} {
      ${selected}
    }
  }

  &:focus {
    & + ${imageClass} {
      ${focus}
    }
  }
`;

export const container = css`
  position: relative;
  width: 100px;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  &:hover ${imageClass} {
    ${focus}
  }
`;
