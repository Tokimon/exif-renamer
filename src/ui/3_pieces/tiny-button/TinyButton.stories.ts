import { action } from '@storybook/addon-actions';

import type { StoryConfig } from '~/types/stories.d';

import TinyButton from './TinyButton.template.svelte';



interface ExampleProps {
  icon: string;
}



export default {
  title: '3_pieces/TinyButton',
  argTypes: {
    text: {
      control: { type: 'text' }
    },
    icon: {
      control: { type: 'text' }
    }
  }
};



export const Default = (props: ExampleProps): StoryConfig => ({
  Component: TinyButton,
  props,
  on: {
    click: action('TinyButton clicked')
  }
});

Default.args = {
  icon: 'close',
  text: 'tiny button'
};
