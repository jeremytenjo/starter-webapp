import { MemoryRouter } from 'react-router-dom'
import { create } from '@storybook/theming/create'

import Firebase from '../../src/firebase/firebase'
import GlobalProviders from '../../src/globalState/GlobalProviders'

import StorybookTheme from './theme'

const theme = create({
  base: 'light',
  brandUrl: 'https://github.com/jeremytenjo/my-interval-timer',
})

export const decorators = [
  (Story) => {
    return (
      <Firebase>
        <StorybookTheme>
          <GlobalProviders>
            <MemoryRouter initialEntries={['/']}>
              <Story />
            </MemoryRouter>
          </GlobalProviders>
        </StorybookTheme>
      </Firebase>
    )
  },
]

export const parameters = {
  docs: {
    theme,
  },
}
