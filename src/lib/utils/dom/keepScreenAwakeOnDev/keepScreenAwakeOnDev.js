const keepScreenAwake = async () => {
  if ('wakeLock' in navigator) {
    try {
      let wakeLock = await navigator.wakeLock.request('screen')

      document.addEventListener('visibilitychange', async () => {
        if (wakeLock !== null && document.visibilityState === 'visible') {
          wakeLock = await navigator.wakeLock.request('screen')
        }
      })
    } catch (err) {
      console.log(err.name, err.message)
    }
  }
}

if (process.env.NODE_ENV === 'development') {
  keepScreenAwake()
}