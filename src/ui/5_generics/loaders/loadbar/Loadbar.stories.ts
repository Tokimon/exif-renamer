import type { StoryConfig } from '~/types/stories.d';

import Loadbar from './Loadbar.template.svelte';



interface ExampleProps {
  value: number;
}



export default {
  title: '5_generics/Loaders/Loadbar',
  argTypes: {
    value: {
      control: {
        type: 'range',
        min: 0,
        max: 100,
        step: 1
      }
    }
  }
};

export const Default = (props: ExampleProps): StoryConfig => ({
  Component: Loadbar,
  props
});

Default.args = {
  value: 50
};
