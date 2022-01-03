// keep as JSX instead of TSX to prevent `...Button` false positive bug
import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

import colors from '../tokens/colors'
import { variants as typography } from '../tokens/typography/typography'

import CssBaselineOverrides from './CssBaseline/CssBaseline'

export const materialTheme = createTheme({
  palette: colors,
  typography,
  components: {
    ...CssBaselineOverrides,
  },
})

export default function MaterialUiThemeProvider({ children }) {
  return (
    <ThemeProvider theme={materialTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
