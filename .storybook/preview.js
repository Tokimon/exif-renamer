import { injectGlobal } from '@emotion/css';

import '~/ui/1_globals/theme/font';

injectGlobal`
  #root {
    max-width: 100%;
  }
`;

export const parameters = {
  layout: 'centered',
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      // color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
