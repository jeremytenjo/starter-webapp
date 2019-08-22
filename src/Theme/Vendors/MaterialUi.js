import React from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

export default ({ children, myTheme }) => {
  const { primary, secondary } = myTheme

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: primary,
      },
      secondary: {
        main: secondary,
      },
    },
    typography: {
      useNextVariants: true,
    },
  })

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
}
