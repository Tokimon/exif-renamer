import { css } from '@emotion/css';

import { headline } from '~/ui/theme/font';

export const header = css`
  ${headline}
  white-space: nowrap;
  display: flex;
  margin: 0;

  span:first-of-type {
    flex: 1 1 auto;
    overflow: hidden;
    text-overflow: ellipsis;
    display: inline-block;

    & + span {
      flex: 0 0 auto;
      display: inline-block;
    }
  }
`;

export const icon = css`
  width: 1em;
  height: 1em;
  margin-right: 10px;
  flex: 0 0 auto;
`;
