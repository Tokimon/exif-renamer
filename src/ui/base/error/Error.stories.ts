import type { StoryConfig } from '~/definitions/stories.d';

import Error from './Error.template.svelte';



export default {
  title: 'Base/Error'
};

export const Default = (): StoryConfig => ({
  Component: Error
});
