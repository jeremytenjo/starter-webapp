// Vendors
import React from 'react'

// Addons
import { storiesOf } from '@storybook/react'
import figmaDecorator from 'storybook-addon-figma'

// Components
import AddToHomeScreenButton from './ui/addToHomeScreen.button'

// Test Data
const CustomButton = ({ onClick }) => <button onClick={onClick}>Custom Button</button>

// Stories
storiesOf('Add To Home Screen Button', module)
  .addDecorator(
    figmaDecorator({
      url: 'https://www.figma.com/file/JDAMhYaQ9pStIBndyZUCcY4A/Webapp?node-id=0%3A1',
    }),
  )
  .add('default', () => <AddToHomeScreenButton />)
  .add('with Button', () => <AddToHomeScreenButton Button={CustomButton} />)
