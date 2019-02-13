---
to: features/<%= name %>.stories.js
---
<%_ compName = name.split('/') _%>
<%_ compName = compName[compName.length - 1] _%>
<%_ compNameUpper = compName.charAt(0).toUpperCase() + compName.slice(1); _%>
// Vendors
import React from 'react'
import { storiesOf } from '@storybook/react'

// Components
import { <%= compNameUpper %> } from './<%= compNameUpper %>.index'

// Test data

// Stories
storiesOf('<%= compNameUpper %>', module).addWithJSX('default', () => <<%= compNameUpper %> />)
