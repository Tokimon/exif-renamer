import { css } from '@emotion/css';

import { headline } from '~/ui/1_globals/theme/font';
import { whiten } from '~/ui/1_globals/theme/colors';

export const header = css`
  ${headline}
  white-space: nowrap;
  display: flex;
  margin: 0;
  padding: 6px 10px;
  transition: box-shadow 0.2s ease-out;
  align-items: center;
  border-bottom: 1px solid black;

  &:focus {
    outline: none;
    box-shadow: 0 2px 5px rgba(0,0,0,0.3);
  }

  span:first-of-type {
    flex: 0 1 auto;
    overflow: hidden;
    text-overflow: ellipsis;
    display: inline-block;

    & + span {
      flex: 0 0 auto;
      display: inline-block;
    }
  }
`;

export const parentPart = css`
  flex: 0 1 auto;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;

  & + span {
    flex: 0 0 auto;
    display: inline-block;
  }
`;

export const folderName = css`
  flex: 0 0 auto;
  display: inline-block;
`;

export const noFolder = css`
  color: ${whiten('text', 75)};
`;

export const icon = css`
  width: 1em;
  height: 1em;
  margin-right: 10px;
  flex: 0 0 auto;
`;
