import { css } from '~/ui/1_globals/core/css';



export const loading = css`
  display: flex;
  flex-direction: column;
  font-size: 1.6rem;
  color: white;
  text-align: center;
  box-sizing: border-box;

  svg {
    width: 70px;
    height: 70px;
    fill: white;
    margin: 10px;
  }
`;