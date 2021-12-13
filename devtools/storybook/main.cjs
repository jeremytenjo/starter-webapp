const webpack = require('./webpack/webpack.cjs')

module.exports = {
  stories: ['../../src/**/sb.stories.@(tsx|mdx)'],
  staticDirs: ['../../public'],
  addons: ['@storybook/addon-docs', '@storybook/addon-controls'],
  webpackFinal: async (defaultConfig) => {
    return webpack(defaultConfig)
  },
}
