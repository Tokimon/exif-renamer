import { css } from '~/ui/1_globals/utils/css';
import colors from '~/ui/1_globals/theme/colors';



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
