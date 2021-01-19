import { css } from '@emotion/css';

import { whiten } from '~/ui/1_globals/theme/colors';

export const container = css`
  white-space: nowrap;
  display: flex;
  padding: 0.3em 0.5em;
  box-sizing: border-box;
  overflow: hidden;
`;

export const beginning = css`
  flex: 0 1 auto;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
`;

export const end = css`
  flex: 0 0 auto;
  display: inline-block;
`;

export const empty = css`
  color: ${whiten('text', 75)};
`;
