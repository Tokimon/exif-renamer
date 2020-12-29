import type { StoryConfig } from '~/types/stories.d';
import detailedAction from '~/ui/story-helpers/detailedAction';

import Menu from './Menu.template.svelte';



export default {
  title: 'Layouts/Menu'
};

export const Default = (): StoryConfig => ({
  Component: Menu,
  on: {
    itemclick: detailedAction('Menu item clicked')
  }
});
