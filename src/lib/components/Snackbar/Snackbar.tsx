import React, { useState, createContext, useContext } from 'react'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'
import type { AlertColor } from '@mui/material/Alert'
import Slide from '@mui/material/Slide'

type ShowProps = {
  message: string
  autoHideDuration?: number
  severity?: AlertColor
}

type Return = {
  show: (props: ShowProps) => any
  hide: () => any
}

export const SnackbarContext = createContext<Return>({
  show: () => null,
  hide: () => null,
})

export const SnackbarProvider = ({ children }) => {
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('')
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

const useSnackbar = () => useContext<Return>(SnackbarContext)

export default useSnackbar
