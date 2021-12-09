import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

import colors from '../tokens/colors'
import typography from '../tokens/typography'

import CssBaselineOverrides from './CssBaseline'

export const materialTheme = createTheme({
  palette: colors,
  typography: typography.variants,
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
