// Vendors
import React from 'react'

// Addons
import { storiesOf } from '@storybook/react'

// Components
import Colors from './Theme.Colors/Theme.Colors.storyComp'
import Typography from './Theme.Typography/Theme.Typography.storyComp'

// Stories
storiesOf('Theme', module)
  .add('Colors', () => <Colors />)
  .add('Typography', () => <Typography />)
