// Vendors
import React from 'react'
import { ThemeProvider } from 'styled-components'
import MaterialUI from './vendors/MaterialUi'

// Variables
import setVariables from './cssVariables/setVariables'

// Theme Manifest
import ThemeManifest from './themeManifest'

// Tags
import './tags/tagBody.css'

// Properties
import './fonts/fonts.css'
import './properties/colors.css'
import './properties/transition.css'

// CSS Variables
setVariables(ThemeManifest)

export default ({ children }) => (
  <ThemeProvider theme={ThemeManifest}>
    <MaterialUI ThemeManifest={ThemeManifest}>{children}</MaterialUI>
  </ThemeProvider>
)
