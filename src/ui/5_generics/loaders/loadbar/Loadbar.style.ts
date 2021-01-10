import { css } from '~/ui/1_globals/utils/css';
import { colors, whiten } from '~/ui/1_globals/theme/colors';



export const bar = css`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 1;
  background: ${colors.primary};
`;

export const pctText = css`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: ${colors.text};
`;

export const pctTextReveal = css`
  ${pctText}
  z-index: 2;
  color: white;
`;

export const loadbar = css`
  position: relative;
  box-shadow: inset 0 0 0 2px ${whiten('text', 60)};
  border-radius: 10px;
  height: 40px;
  overflow: hidden;
`;
