import React from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

export default ({ children, myTheme }) => {
  const defaultColor = '#000'
  const colorPrimary = myTheme.colors.primary || defaultColor
  const colorSecondary = myTheme.colors.secondary || defaultColor

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: colorPrimary
      },
      secondary: {
        main: colorSecondary
      }
    },
    typography: {
      useNextVariants: true
    }
  })

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
}
