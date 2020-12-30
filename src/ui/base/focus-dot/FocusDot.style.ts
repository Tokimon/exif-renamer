import { css } from '~/ui/utils/css';

import { fontSize } from '~/ui/theme/font';
import colors from '~/ui/theme/colors';



export const container = css`
  font-size: ${fontSize(10)};
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