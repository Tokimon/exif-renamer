import { css } from '~/ui/1_globals/utils/css';

import { container as tile } from '~/ui/4_components/file-tile/FileTile.style';




export const list = css`
  display: flex;
  flex-wrap: wrap;

  ${'.' + tile} {
    cursor: pointer;
  }

  > * {
    margin: 5px;
  }
`;
