import type { StoryConfig } from '~/types/stories.d';

import Thumb from './Thumb.template.svelte';



interface ExampleProps {
  src: string;
  count: number;
}



export default {
  title: '3_pieces/Thumb'
};

export const Default = (props: ExampleProps): StoryConfig => ({
  Component: Thumb,
  props: {
    ...props,
    noImageIcon: 'landscape'
  }
});

Default.args = {
  src: 'https://placeimg.com/100/100/any',
  count: 99
};
