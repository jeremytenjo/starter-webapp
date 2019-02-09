const addToHomeScreenInit = () => {
  window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault()

    // Stash the event so it can be triggered later.
    console.log(e)
    window.addToHomeScreen = e
  })
}

const addToHomeScreen = () => window.addToHomeScreen && window.addToHomeScreen.prompt()

export { addToHomeScreenInit, addToHomeScreen }
