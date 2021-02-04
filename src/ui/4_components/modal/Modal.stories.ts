import { action } from '@storybook/addon-actions';

import type { StoryConfig } from '~/types/stories.d';

import Modal from './Modal.template.svelte';



interface ExampleProps {
  width: number;
  height: number;
}



export default {
  title: '4_components/Modal',
  argTypes: {
    width: {
      control: {
        type: 'range',
        min: 25,
        max: 80,
        step: 1
      }
    },
    height: {
      control: {
        type: 'range',
        min: 25,
        max: 80,
        step: 1
      }
    }
  }
};



export const Default = (props: ExampleProps): StoryConfig => ({
  Component: Modal,
  props,
  on: {
    close: action('Close the modal')
  }
});

Default.args = {
  width: 50,
  height: 50
};
