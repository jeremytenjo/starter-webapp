import GlobalStyles from './globalStyles'
import MaterialUiThemeProvider from './materialui/MaterialUiThemeProvider'

export default function ThemeProvider({ children }) {
  return (
    <MaterialUiThemeProvider>
      <GlobalStyles />
      {children}
    </MaterialUiThemeProvider>
  )
}
