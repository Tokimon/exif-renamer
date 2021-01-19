import { css } from '~/ui/1_globals/utils/css';
import { fontSize } from '~/ui/1_globals/theme/font';
import { color, blacken } from '~/ui/1_globals/theme/colors';



export const loadingOverlay = css`
  font-size: ${fontSize(16)};
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: ${color(blacken('text', 70), 85)};
  color: white;
  text-align: center;
  box-sizing: border-box;

  svg {
    width: 70px;
    height: 70px;
    fill: white;
    margin: 10px;
  }
`;