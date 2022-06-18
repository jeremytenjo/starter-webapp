import React from 'react'
import { SnackbarProvider } from '@useweb/ui/Snackbar'

export default function ShellLayout({ children }) {
  return (
    <>
      <SnackbarProvider>
        <main>{children}</main>
      </SnackbarProvider>
    </>
  )
}
