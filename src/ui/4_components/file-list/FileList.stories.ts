import type { StoryConfig } from '~/types/stories.d';

import detailedAction from '~/ui/1_globals/story-helpers/detailedAction';
import createFileInfoList from '~/ui/1_globals/story-helpers/createFileInfoList';

import FileList from './FileList.template.svelte';



const files = createFileInfoList();



export default {
  title: '4_components/FileList'
};

export const Default = (): StoryConfig => ({
  Component: FileList,
  props: { files },
  on: {
    thumbclick: detailedAction('File thumb clicked')
  }
});
