import type { StoryConfig } from '~/types/stories.d';

import FocusDot from './FocusDot.template.svelte';



interface ExampleProps {
  number: number;
}



export default {
  title: '2_base/FocusDot'
};

export const Default = (props: ExampleProps): StoryConfig => ({
  Component: FocusDot,
  props
});

Default.args = {
  number: 99
};
