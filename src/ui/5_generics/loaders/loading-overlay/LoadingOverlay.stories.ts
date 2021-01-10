import type { StoryConfig } from '~/types/stories.d';

import LoadingOverlay from './LoadingOverlay.template.svelte';



interface ExampleProps {
  text: string;
}



export default {
  title: '5_generics/loaders/LoadingOverlay'
};

export const Default = (props: ExampleProps): StoryConfig => ({
  Component: LoadingOverlay,
  props
});

Default.args = {
  text: 'Loading text'
};
