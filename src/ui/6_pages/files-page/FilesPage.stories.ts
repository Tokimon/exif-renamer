import type { StoryConfig } from '~/types/stories.d';

import createFileInfoList from '~/ui/1_globals/story-helpers/createFileInfoList';

import FilesPage from './FilesPage.template.svelte';



const files = createFileInfoList();



export default {
  title: '6_pages/FilesPage'
};

export const Default = (): StoryConfig => ({
  Component: FilesPage,
  props: { files }
});