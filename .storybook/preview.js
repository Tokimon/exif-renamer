import { injectGlobal } from '@emotion/css';

import '~/ui/theme/font';

injectGlobal`
  #root {
    max-width: 100%;
  }
`;

export const parameters = {
  layout: 'centered'
};