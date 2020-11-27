import type { StoryConfig } from '~/definitions/stories.d';

import Error from './Error.template.svelte';



interface ExampleProps {
  text: string;
}



export default {
  title: 'Base/Error'
};

export const Default = ({ text }: ExampleProps): StoryConfig => ({
  Component: Error,
  props: { text }
});

Default.args = {
  text: 'Error text'
};
