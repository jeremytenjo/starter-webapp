// Vendors
import React from 'react'
import { storiesOf } from '@storybook/react'

// Components
import AddToHomeScreenButton from './addToHomeScreen.button'

// Test Data
const CustomButton = ({ onClick }) => <button onClick={onClick}>Custom Button</button>

// Stories
storiesOf('Add To Home Screen Button', module)
  .add('default', () => <AddToHomeScreenButton />)
  .add('with Button', () => <AddToHomeScreenButton Button={CustomButton} />)
