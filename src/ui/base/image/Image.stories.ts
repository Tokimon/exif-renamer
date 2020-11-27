import type { StoryConfig } from '~/definitions/stories.d';

import Image from './Image.template.svelte';

import svg from '~/ui/svg/icons/landscape.svg';



interface ExampleProps {
  src: string;
  alt: string;
}



export default {
  title: 'Base/Image'
};

export const Default = (props: ExampleProps): StoryConfig => ({
  Component: Image,
  props: {
    ...props,
    noImageIcon: svg.id
  }
});

Default.args = {
  src: 'https://placeimg.com/200/200/any',
  alt: 'My Image'
};
