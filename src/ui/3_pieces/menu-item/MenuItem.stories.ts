import type { StoryConfig } from '~/types/stories.d';

import detailedAction from '~/ui/1_globals/story-helpers/detailedAction';

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
