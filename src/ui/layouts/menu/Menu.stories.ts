import type { StoryConfig } from '~/definitions/stories.d';
import detailedAction from '~/story-helpers/detailedAction';

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
