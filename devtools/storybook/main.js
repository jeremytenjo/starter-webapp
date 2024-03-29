const webpackFinal = require('./storybookWebpack/webpackFinal.js')

module.exports = {
  stories: [
    '../../src/**/*.stories.mdx',
    '../../src/**/*.stories.@(ts|tsx)',
    '../../functions/src/**/*.stories.@(ts|tsx)',
  ],
  staticDirs: ['../../public'],
  core: { builder: '@storybook/builder-vite' },
  features: { emotionAlias: false, storyStoreV7: true },
  framework: '@storybook/react',
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  webpackFinal: async (defaultWebpackConfig) => {
    return webpackFinal({ defaultWebpackConfig })
  },
  refs: {
    useweb: {
      title: 'useweb library',
      url: 'https://useweb.dev/',
      expanded: false,
    },
  },
}
