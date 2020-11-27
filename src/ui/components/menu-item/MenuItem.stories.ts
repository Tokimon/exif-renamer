import detailedAction from '~/story-helpers/detailedAction';
import type { StoryConfig } from '~/definitions/stories.d';

import svg from '~/ui/svg/icons/alert.svg'

import MenuItem from './MenuItem.template.svelte';



interface ExampleProps {
  text: string;
}



export default {
  title: 'Components/MenuItem'
};

export const Default = ({ text }: ExampleProps): StoryConfig => ({
  Component: MenuItem,
  props: {
    icon: svg.id,
    text
  },
  on: {
    click: detailedAction('Menu Item clicked')
  }
});

Default.args = {
  text: 'Menu item'
};
