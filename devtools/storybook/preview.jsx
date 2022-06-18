import React from 'react'
import { create } from '@storybook/theming'
import { SnackbarProvider } from '@useweb/ui/Snackbar'

import ClickToComponent from '../../src/lib/components/useweb/ClickToComponent/ClickToComponentStorybook'
import Firebase from '../../src/services/firebase/firebase'

import StorybookTheme from './theme/storybookTheme'

const theme = create({
  base: 'light',
  brandUrl: 'https://github.com/jeremytenjo/starter-webapp',
})

export const decorators = [
  (Story) => {
    return (
      <>
        <ClickToComponent />

        <Firebase>
          <SnackbarProvider>
            <StorybookTheme>
              <Story />
            </StorybookTheme>
          </SnackbarProvider>
        </Firebase>
      </>
    )
  },
]

const isProd = process.env.NODE_ENV === 'production'

export const parameters = {
  docs: {
    theme,
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  previewTabs: {
    'storybook/docs/panel': { index: isProd ? -1 : 1 },
  },
}
