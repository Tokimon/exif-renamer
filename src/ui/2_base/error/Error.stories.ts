import type { StoryConfig } from '~/types/stories.d';

import Error from './Error.template.svelte';



interface ExampleProps {
  text: string;
}



export default {
  title: 'Base/Error'
};

export const Default = (props: ExampleProps): StoryConfig => ({
  Component: Error,
  props
});

Default.args = {
  text: 'Error text'
};
