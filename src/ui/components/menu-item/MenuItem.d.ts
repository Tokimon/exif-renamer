// TOD: This makes little sense as it is not really representative of the MenuItem (eg. onClick)
export interface IMenuItem {
  icon: string;
  label: string;
  class?: string;
  onClick?: (e: MouseEvent) => any;
}