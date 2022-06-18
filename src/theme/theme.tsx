import React from 'react'

import UsewebThemeProvider from './usewebTheme/UsewebTheme'

export default function Theme({ children }) {
  return <UsewebThemeProvider>{children}</UsewebThemeProvider>
}
