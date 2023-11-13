import '~/ui/0_assets/theme/colors/colors.css';
import '~/ui/0_assets/theme/text/text.css';

export default {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};
