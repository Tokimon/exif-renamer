import { action } from '@storybook/addon-actions';

import type { StoryConfig } from '~/definitions/stories.d';

import MenuItem from './MenuItem.template.svelte';

import svg from '~/ui/svg/icons/alert.svg'



export default {
  title: 'Components/MenuItem'
};

export const Default = (): StoryConfig => ({
  Component: MenuItem,
  props: {
    icon: svg.id,
    text: 'Menu item'
  },
  on: {
    click: action('Menu Item clicked')
  }
});
