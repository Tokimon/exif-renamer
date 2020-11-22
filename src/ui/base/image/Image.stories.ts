import type { StoryConfig } from '~/definitions/stories.d';

import Image from './Image.template.svelte';



export default {
  title: 'Base/Image'
};

export const Default = (): StoryConfig => ({
  Component: Image,
  props: {
    src: 'https://placeimg.com/200/200/any',
    alt: 'My Image'
  }
});

export const NoSource = (): StoryConfig => ({
  Component: Image,
  props: {}
});

export const FailedSource = (): StoryConfig => ({
  Component: Image,
  props: {
    src: 'does-not-exists.com'
  }
});
