import { css } from '~/ui/utils/css';

import colors from '~/ui/theme/colors';



export const error = css`
  color: ${colors.danger};
  display: flex;
  align-items: center;

  .svg-icon {
    width: 1em;
    height: 1em;
    margin-right: 5px;
  }
`;
