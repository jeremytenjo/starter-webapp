const addToHomeScreenInit = () => {
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault()
    window.addToHomeScreen = e
  })
}

export default addToHomeScreenInit
