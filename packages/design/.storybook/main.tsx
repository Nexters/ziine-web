/** @type { import('@storybook/nextjs').StorybookConfig } */
const config = {
  stories: ['../src/stories/*.mdx', '../src/stories/*.stories.@(js|jsx|mjs|ts|tsx)', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  staticDirs: [
    {
      from: '../src/fonts',
      to: '/fonts',
    },
  ],
};
export default config;
