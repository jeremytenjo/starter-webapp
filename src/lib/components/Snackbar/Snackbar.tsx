import React, { useState, createContext, useContext } from 'react'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'
import type { AlertColor } from '@mui/material/Alert'
import Slide from '@mui/material/Slide'

export const SnackbarContext = createContext(null)

type ShowProps = {
  message: string | number
  autoHideDuration?: number
  severity?: AlertColor
}

export const SnackbarProvider = ({ children }) => {
  const [open, setOpen] = useState(null)
  const [message, setMessage] = useState(null)
  const [autoHideDuration, setAutoHideDuration] = useState(3000)
  const [severity, setSeverity] = useState('info' as any)

  const show = ({ message, autoHideDuration, severity }: ShowProps) => {
    setMessage(message)
    autoHideDuration && setAutoHideDuration(autoHideDuration)
    severity && setSeverity(severity)
    setOpen(true)
  }

  const hide = () => {
    setOpen(false)
  }

  return (
    <SnackbarContext.Provider
      value={{
        show,
        hide,
      }}
    >
      {children}
      <Snackbar
        open={open}
        autoHideDuration={autoHideDuration}
        onClose={hide}
        TransitionComponent={Slide}
      >
        <Alert severity={severity}>{message}</Alert>
      </Snackbar>
    </SnackbarContext.Provider>
  )
}

type Return = {
  show: (props: ShowProps) => any
  hide: () => any
}

const useSnackbar = () => useContext<Return>(SnackbarContext)

export default useSnackbar
