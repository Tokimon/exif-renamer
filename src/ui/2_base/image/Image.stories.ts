import type { StoryConfig } from '~/types/stories.d';

import Image from './Image.template.svelte';



interface ExampleProps {
  src: string;
  alt: string;
  noImageIcon: string;
}



export default {
  title: '2_base/Image'
};

export const Default = (props: ExampleProps): StoryConfig => ({
  Component: Image,
  props
});

Default.args = {
  src: 'https://placeimg.com/100/100/any',
  alt: 'My Image'
};
