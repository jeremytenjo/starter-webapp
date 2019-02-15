// Vendors
import { configure } from '@storybook/react'

// Addons Config

// Stories
function loadStories() {
  require('./storyBookExample')
  require('../src/Utilities/addToHomeScreen/ui/addToHomeScreen.stories')
  // You can require as many stories as you need.
}

configure(loadStories, module)
