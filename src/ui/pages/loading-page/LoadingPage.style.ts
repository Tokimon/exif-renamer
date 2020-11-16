import { css } from 'emotion';

import { text } from '~/ui/theme/text';
import { colors } from '~/ui/theme/colors';



export const loadingPage = css`
  ${text}
  font-size: 20px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  box-sizing: border-box;
  color: ${colors.primary};

  svg {
    width: 50px;
    height: 50px;
    fill: currentColor;
    margin: 10px;
  }
`;