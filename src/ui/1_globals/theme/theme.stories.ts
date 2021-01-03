import type { StoryConfig } from '~/types/stories.d';
import type { FontType } from './font';

import ColorsTemplate from './Colors.template.svelte';
import FontTemplate from './font.template.svelte';


interface FontExampleProps {
  type: string;
}


export default {
  title: 'Theme'
};

export const Colors = (): StoryConfig => ({ Component: ColorsTemplate });

export const Font = (props: FontExampleProps): StoryConfig => ({
  Component: FontTemplate,
  props
});

Font.argTypes = {
  type: {
    control: {
      type: 'select',
      options: ['text', 'headline'] as FontType[]
    }
  }
};

Font.args = {
  text: 'The quick brown fox jumped over the lazy dog',
  type: 'text'
};
