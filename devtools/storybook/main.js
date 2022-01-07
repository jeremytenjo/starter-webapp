module.exports = {
  stories: ['../../src/**/sb.stories.tsx', '../../functions/src/**/sb.stories.tsx'],
  staticDirs: ['../../public'],
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: {
        actions: false,
      },
    },
  ],
  framework: '@storybook/react',
  features: {
    storyStoreV7: true,
  },
  reactOptions: {
    fastRefresh: true,
  },
}
