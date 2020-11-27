import type { StoryConfig } from '~/definitions/stories.d';

import ColorsTemplate from './Colors.template.svelte';
import TextTemplate from './Text.template.svelte';



export default {
  title: 'Theme'
};

export const Colors = (): StoryConfig => ({ Component: ColorsTemplate });
export const Text = (): StoryConfig => ({ Component: TextTemplate });
