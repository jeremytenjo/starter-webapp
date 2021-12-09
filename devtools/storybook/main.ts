import webpack from './webpack'

module.exports = {
  stories: ['../../src/**/*.stories.@(js|mdx)'],
  addons: ['@storybook/addon-docs', '@storybook/addon-controls'],
  webpackFinal: async (defaultConfig) => {
    return webpack(defaultConfig)
  },
}
