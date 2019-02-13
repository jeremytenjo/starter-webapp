import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from './Button.index'

storiesOf('Button', module).addWithJSX('with text', () => <Button />)
