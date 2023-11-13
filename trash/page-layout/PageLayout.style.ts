import { whiten } from '~/ui/1_globals/theme/colors';
import { css } from '~/ui/1_globals/utils/css';

export const root = css`
  display: flex;
  height: 100%;
`;

export const menuPane = css`
  padding: 5px;
  border-right: 1px solid ${whiten('text', 80)};
  flex: 250px 0 0;
`;

export const contentPane = css`
  flex: auto 1 1;
`;
