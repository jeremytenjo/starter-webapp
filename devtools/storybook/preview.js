import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { create } from '@storybook/theming/create'

import Firebase from '../../src/firebase/firebase'

import StorybookTheme from './theme/storybookTheme'

const theme = create({
  base: 'light',
  brandUrl: 'https://github.com/jeremytenjo/starter-webapp',
})

export const decorators = [
  (Story) => {
    return (
      <StorybookTheme>
        <MemoryRouter initialEntries={['/']}>
          <Story />
        </MemoryRouter>
      </StorybookTheme>
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
