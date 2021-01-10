import { action } from '@storybook/addon-actions';

import type { StoryConfig } from '~/types/stories.d';

import { colorNames } from '~/ui/1_globals/theme/colors';

import Button from './Button.template.svelte';



interface ExampleProps {
  text: string;
  href: string;
  color: string;
  disabled: boolean;
}



export default {
  title: '1_base/Button',
  argTypes: {
    text: {
      control: { type: 'text' }
    },
    href: {
      control: { type: 'text' }
    },
    color: {
      control: {
        type: 'select',
        options: colorNames
      }
    },
    disabled: {
      control: { type: 'boolean' }
    }
  }
};



export const Default = (props: ExampleProps): StoryConfig => ({
  Component: Button,
  props,
  on: {
    click: action('Button clicked')
  }
});

Default.args = {
  text: 'Button',
  href: '',
  color: colorNames[0],
  disabled: false
};
