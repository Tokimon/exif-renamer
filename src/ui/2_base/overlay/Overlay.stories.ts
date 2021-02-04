import type { StoryConfig } from '~/types/stories.d';

import Overlay from './Overlay.template.svelte';



export default { title: '2_base/Overlay' };

export const Default = (): StoryConfig => ({ Component: Overlay });
