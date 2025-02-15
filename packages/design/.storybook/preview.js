/** @type { import('@storybook/react').Preview } */

import './index.css';

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [],
};

export default preview;
