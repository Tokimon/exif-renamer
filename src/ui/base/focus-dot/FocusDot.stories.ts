import type { StoryConfig } from '~/definitions/stories.d';

import FocusDot from './FocusDot.template.svelte';



interface ExampleProps {
  number: number;
}



export default {
  title: 'Base/FocusDot'
};

export const Default = ({ number }: ExampleProps): StoryConfig => ({
  Component: FocusDot,
  props: { number }
});

Default.args = {
  number: 99
};
