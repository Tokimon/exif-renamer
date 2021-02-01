import { css } from '~/ui/1_globals/core/css';
import { menuItem } from '~/ui/3_pieces/menu-item/MenuItem.style';



export const menu = css`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  ${'.' + menuItem} {
    margin: 5px;
  }
`;
