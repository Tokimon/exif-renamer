import type { StoryConfig } from '~/definitions/stories.d';

import FocusDot from './FocusDot.template.svelte';

export default {
  title: 'Base/FocusDot'
};

export const Default = (): StoryConfig => ({
  Component: FocusDot
});