import { css } from '~/ui/1_globals/utils/css';
import { color } from '~/ui/1_globals/theme/colors';



export const folderSelect = css`
  display: flex;
  flex-direction: column;
  color: white;
`;

export const input = css`
  line-height: 40px;
  padding: 10px;
  border: 2px solid silver;
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 28px;
  transition: background-color 0.2s linear;

  &:hover {
    background: ${color('white', 0.4)};
  }

  &.error {
    border-color: red;
  }
`;

export const hider = css`
  width: 0;
  height: 0;
  overflow: hidden;
`;

export const help = css`
  padding: 10px 0;
`;
