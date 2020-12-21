import type { StoryConfig } from '@/types/stories.d';

import LoadingOverlay from './LoadingOverlay.template.svelte';



interface ExampleProps {
  text: string;
}



export default {
  title: 'Loaders/LoadingOverlay'
};

export const Default = ({ text }: ExampleProps): StoryConfig => ({
  Component: LoadingOverlay,
  props: { text }
});

Default.args = {
  text: 'Loading text'
};
