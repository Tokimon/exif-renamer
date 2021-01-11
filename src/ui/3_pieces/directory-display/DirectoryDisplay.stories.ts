import type { StoryConfig } from '~/types/stories.d';

import DirectoryDisplay from './DirectoryDisplay.template.svelte';



interface ExampleProps {
  src: string;
  count: number;
}



export default {
  title: '3_pieces/DirectoryDisplay'
};

export const Default = (props: ExampleProps): StoryConfig => ({
  Component: DirectoryDisplay,
  props
});

Default.args = {
  path: 'some/directory/to/find/files/from'
};
