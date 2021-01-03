import { css } from '~/ui/1_globals/utils/css';
import { color, whiten, blacken } from '~/ui/1_globals/theme/colors';
import { fontSize } from '~/ui/1_globals/theme/font';



export const menuItem = css`
  font-size: ${fontSize(14)};
  position: relative;
  color: ${color('primary')};
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 10px;
  transition: background-color 0.2s, color 0.2s;
  border-radius: 4px;

  svg {
    width: 16px;
    height: 16px;
    fill: currentColor;
    margin-right: 15px;
  }

  &:hover {
    background: ${whiten('primary', 85)};
    color: ${blacken('primary', 30)};
  }
`;
