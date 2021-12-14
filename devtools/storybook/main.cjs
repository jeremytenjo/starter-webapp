module.exports = {
  stories: ['../../src/**/sb.stories.tsx'],
  staticDirs: ['../../public'],
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: {
        actions: false,
      },
    },
  ],
}
