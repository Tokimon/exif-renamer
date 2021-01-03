import { css } from '~/ui/1_globals/utils/css';

import { thumb } from '~/ui/3_pieces/thumb/Thumb.style';




export const list = css`
  display: flex;
  flex-wrap: wrap;

  ${'.' + thumb} {
    cursor: pointer;
  }

  > * {
    margin: 5px;
  }
`;
