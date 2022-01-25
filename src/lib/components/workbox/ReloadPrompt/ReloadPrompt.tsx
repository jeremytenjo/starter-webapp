import React, { useRef } from 'react'
// https://vite-plugin-pwa.netlify.app/frameworks/react.html
import { useRegisterSW } from 'virtual:pwa-register/react'
import Button from '@mui/material/Button'

import useSnackbar from '../../Snackbar/Snackbar'

export default function ReloadPrompt() {
  const snackbar = useSnackbar()
  const updatedAppRef = useRef(false)

  const showRefreshPrompt = () => {
    const updateSW = async () => {
      snackbar.hide()
      await updateServiceWorker(true)
    }

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
      if (!updatedAppRef.current) {
        showRefreshPrompt()
        updatedAppRef.current = true
      }
    },
  })

  // keep as component in order to load inside Snackbar Provider
  return null
}
