import webpack from './webpack'

export default {
  stories: ['../../src/**/*.stories.@(tsx|mdx)'],
  staticDirs: ['./public '],
  addons: ['@storybook/addon-docs', '@storybook/addon-controls'],
  webpackFinal: async (defaultConfig) => {
    return webpack(defaultConfig)
  },
}
