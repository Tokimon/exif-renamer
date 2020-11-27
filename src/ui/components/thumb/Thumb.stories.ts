import type { StoryConfig } from '~/definitions/stories.d';

import svg from '~/ui/svg/icons/landscape.svg';

import Thumb from './Thumb.template.svelte';



interface ExampleProps {
  src: string;
  count: number;
}



export default {
  title: 'Components/Thumb'
};

export const Default = (props: ExampleProps): StoryConfig => ({
  Component: Thumb,
  props: {
    ...props,
    noImageIcon: svg.id
  }
});

Default.args = {
  src: 'https://placeimg.com/100/100/any',
  count: 99
};
