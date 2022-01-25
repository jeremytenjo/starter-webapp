import React from 'react'
// https://vite-plugin-pwa.netlify.app/frameworks/react.html
import { useRegisterSW } from 'virtual:pwa-register/react'
import Button from '@mui/material/Button'

import useSnackbar from '../../Snackbar/Snackbar'

export default function ReloadPrompt() {
  const snackbar = useSnackbar()

  const updateSW = () => {
    updateServiceWorker(true)
    snackbar.hide()
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
      showRefreshPrompt()
    },
  })

  // keep as component in order to load inside Snackbar Provider
  return null
}
