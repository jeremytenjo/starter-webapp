// Vendors
import React from 'react'
import { storiesOf } from '@storybook/react'

// Addons
import { withReadme } from 'storybook-readme'

// Components
import ThemeReadme from './Theme.readme.md'
import Colors from './Theme.Colors/Theme.Colors.storyComp'
import Typography from './Theme.Typography/Theme.Typography.storyComp'

// Stories
storiesOf('Theme', module)
  .addDecorator(withReadme([ThemeReadme]))
  .add('Colors', () => <Colors />)
  .add('Typography', () => <Typography />)
