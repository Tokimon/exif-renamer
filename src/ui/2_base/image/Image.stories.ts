import type { StoryConfig } from '~/types/stories.d';

import Image from './Image.template.svelte';



interface ExampleProps {
  src: string;
  alt: string;
  noImageIcon: string;
}



export default {
  title: 'Base/Image'
};

export const Default = (props: ExampleProps): StoryConfig => ({
  Component: Image,
  props
});

Default.args = {
  src: 'https://placeimg.com/200/200/any',
  alt: 'My Image',
  noImageIcon: 'landscape'
};
