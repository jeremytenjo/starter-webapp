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
      <Firebase>
        <StorybookTheme>
          <MemoryRouter initialEntries={['/']}>
            <Story />
          </MemoryRouter>
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
