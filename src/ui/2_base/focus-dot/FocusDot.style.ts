import { css } from '~/ui/1_globals/core/css';
import colors from '~/ui/1_globals/theme/colors';



export const container = css`
  font-size: 1rem;
  border-radius: 9px;
  height: 16px;
  min-width: 16px;
  line-height: 1;
  padding: 9px 5px;
  color: white;
  background: ${colors.secondary};
  display: inline-flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;