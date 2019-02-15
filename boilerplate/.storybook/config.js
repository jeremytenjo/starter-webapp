import { configure, addDecorator } from '@storybook/react'

// Addons
import { withOptions } from '@storybook/addon-options'
import { withPrettierSource } from 'storybook-addon-prettier-source'

// Decorats
addDecorator(
  withOptions({
    name: 'Web App',
    addonPanelInRight: true,
  }),
)

addDecorator((story, context) => withPrettierSource()(story)(context))

const req = require.context('../src', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)
