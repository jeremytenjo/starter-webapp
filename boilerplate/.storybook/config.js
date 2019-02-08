// Vendors
import { configure, addDecorator } from '@storybook/react'

// Addons Config

// Stories
function loadStories() {
  require('./storyBookExample')
  // You can require as many stories as you need.
}

configure(loadStories, module)
