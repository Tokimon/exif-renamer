import { css } from '~/ui/1_globals/core/css';
import { color, blacken } from '~/ui/1_globals/theme/colors';



export const wrap = css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const background = css`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${color(blacken('text', 70), 70)};

  & ~ * {
    z-index: 1;
  }
`;