import React from 'react'
import create from 'zustand'
// https://vite-plugin-pwa.netlify.app/frameworks/react.html
import { useRegisterSW } from 'virtual:pwa-register/react'
import Button from '@mui/material/Button'

import useSnackbar from '../../Snackbar/Snackbar'

const useUpdatedApp = create((set: any) => ({
  updatedApp: false,
  setUpdatedApp: (newValue) => set(() => ({ updatedApp: newValue })),
}))

export default function ReloadPrompt() {
  const snackbar = useSnackbar()
  const updatedApp = useUpdatedApp()

  const updateSW = () => {
    snackbar.hide()
    updateServiceWorker(true)
  }

  const showRefreshPrompt = () => {
    snackbar.show({
      disableAutoHide: true,
      message: `App updates available`,
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'center',
      },
      action: (
        <Button
          color='inherit'
          size='small'
          onClick={updateSW}
          sx={{ alignSelf: 'center' }}
        >
          Update
        </Button>
      ),
    })
  }

  const { updateServiceWorker } = useRegisterSW({
    onNeedRefresh: () => {
      if (!updatedApp.updatedApp) {
        showRefreshPrompt()
        updatedApp.setUpdatedApp(true)
      }
    },
  })

  // keep as component in order to load inside Snackbar Provider
  return null
}
