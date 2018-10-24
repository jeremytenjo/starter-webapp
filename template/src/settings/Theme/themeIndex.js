import React from 'react'
import { ThemeProvider } from 'styled-components'

import './fonts/fonts.css'
import './body.css'
import './colors.css'
import './transition.css'
import './icons.css'

const theme = {
  colors: {
    primary: '#24c3a9',
    secondary: '#ada3ff'
  }
}

export default ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>
