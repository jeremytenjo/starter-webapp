import React from 'react'

import MaterialUiThemeProvider from './materialui/MaterialUiThemeProvider'

export default function ThemeProvider({ children }) {
  return <MaterialUiThemeProvider>{children}</MaterialUiThemeProvider>
}
