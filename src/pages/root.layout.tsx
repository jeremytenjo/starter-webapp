import React from 'react'

import { SnackbarProvider } from '../lib/components/Snackbar/Snackbar'
import ReloadPrompt from '../lib/components/workbox/ReloadPrompt/ReloadPrompt'

export default function ShellLayout({ children }) {
  return (
    <>
      <SnackbarProvider>
        <main>{children}</main>
        <ReloadPrompt />
      </SnackbarProvider>
    </>
  )
}
