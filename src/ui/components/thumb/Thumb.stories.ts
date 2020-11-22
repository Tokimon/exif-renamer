import type { StoryConfig } from '~/definitions/stories.d';

import Thumb from './Thumb.template.svelte';



export default {
  title: 'Components/Thumb'
};

export const Default = (): StoryConfig => ({
  Component: Thumb,
  props: {
    src: 'https://placeimg.com/100/100/any',
    count: 99
  }
});
