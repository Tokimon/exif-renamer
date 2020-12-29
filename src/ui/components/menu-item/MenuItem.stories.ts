import detailedAction from '~/ui/story-helpers/detailedAction';
import type { StoryConfig } from '~/types/stories.d';

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
    icon: 'alert',
    text
  },
  on: {
    click: detailedAction('Menu Item clicked')
  }
});

Default.args = {
  text: 'Menu item'
};
