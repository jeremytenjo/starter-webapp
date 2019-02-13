import { configure, setAddon } from '@storybook/react'

// Addons
import JSXAddon from 'storybook-addon-jsx'
import '@storybook/addon-console'

const req = require.context('../features', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

setAddon(JSXAddon)

configure(loadStories, module)
