import type { StoryConfig } from '~/types/stories.d';

import PathString from './PathString.template.svelte';



interface ExampleProps {
  src: string;
  count: number;
  width: number;
}



export default {
  title: '2_base/PathString',
  argTypes: {
    width: {
      control: {
        type: 'range',
        min: 5,
        max: 100,
        step: 1
      }
    }
  }
};

export const Default = (props: ExampleProps): StoryConfig => ({
  Component: PathString,
  props
});

Default.args = {
  path: 'some/directory/to/find/files/from',
  width: 100
};
