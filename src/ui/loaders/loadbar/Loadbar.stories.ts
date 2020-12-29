import type { StoryConfig } from '~/types/stories.d';

import Loadbar from './Loadbar.template.svelte';



interface ExampleProps {
  value: number;
}



export default {
  title: 'Loaders/Loadbar',
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

export const Default = ({ value }: ExampleProps): StoryConfig => ({
  Component: Loadbar,
  props: { value }
});

Default.args = {
  value: 50
};
