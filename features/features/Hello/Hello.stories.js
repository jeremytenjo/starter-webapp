// Vendors
import React from 'react'
import { storiesOf } from '@storybook/react'

// Components
import { Hello } from './Hello.index'

// Test data

// Stories
storiesOf('Hello', module).addWithJSX('default', () => <Hello />)
