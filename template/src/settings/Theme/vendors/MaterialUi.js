import React from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

export default ({ children, ThemeManifest }) => {
  const defaultColor = '#000'
  const colorPrimary = ThemeManifest.colors.primary || defaultColor
  const colorSecondary = ThemeManifest.colors.secondary || defaultColor

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
