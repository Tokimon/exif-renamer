import type { StoryConfig } from '~/types/stories.d';

import detailedAction from '~/ui/1_globals/story-helpers/detailedAction';

import FileList from './FileList.template.svelte';



const types = ['animals', 'nature', 'arch', 'people', 'tech'];
const paths = Array.from(Array(50), () => [
  'https://placeimg.com/150/150/' + types[Math.round(Math.random() * 4)],
  Math.round(Math.random() * 20)
]);



export default {
  title: '4_components/FileList'
};

export const Default = (): StoryConfig => ({
  Component: FileList,
  props: { paths },
  on: {
    thumbclick: detailedAction('File thumb clicked')
  }
});