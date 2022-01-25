import React, { useEffect } from 'react'
// https://vite-plugin-pwa.netlify.app/frameworks/react.html
import { useRegisterSW } from 'virtual:pwa-register/react'
import Button from '@mui/material/Button'

import useSnackbar from '../../Snackbar/Snackbar'

export default function ReloadPrompt() {
  const snackbar = useSnackbar()
  const {
    needRefresh: [needRefresh],
    updateServiceWorker,
  } = useRegisterSW()

  useEffect(() => {
    if (needRefresh) {
      snackbar.show({
        disableAutoHide: true,
        message: `App updates available`,
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'center',
        },
        action: (
          <Button color='inherit' size='small' onClick={() => updateServiceWorker(true)}>
            Update
          </Button>
        ),
      })
    }
  }, [needRefresh])

  // keep as component in order to load inside Snackbar Provider
  return null
}
