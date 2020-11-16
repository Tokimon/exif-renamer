import { css } from 'emotion';

import { text } from '~/ui/theme/text';
import colors from '~/ui/theme/colors';



export const error = css`
  ${text}
  color: ${colors.danger};
  display: flex;
  align-items: center;

  .svg-icon {
    width: 1em;
    height: 1em;
    margin-right: 5px;
  }
`;
