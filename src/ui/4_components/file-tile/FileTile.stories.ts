import type { StoryConfig } from '~/types/stories.d';

import FileTile from './FileTile.template.svelte';



interface ExampleProps {
  src: string;
  count: number;
}



export default {
  title: '4_components/FileTile'
};

export const Default = (props: ExampleProps): StoryConfig => ({
  Component: FileTile,
  props
});

Default.args = {
  path: '/My/File.png',
  thumbnail: 'https://placeimg.com/100/100/any',
  count: 99
};
