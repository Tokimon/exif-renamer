import { css } from '~/ui/utils/css';

import { thumb } from '~/ui/components/thumb/Thumb.style';



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
