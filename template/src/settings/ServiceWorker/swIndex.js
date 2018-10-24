export default function() {
  const initServiceWorker = () => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/sw.js')
          .then((registration) => {})
          .catch((registrationError) => {
            console.log(registrationError)
          })
      })
    }
  }
  process.env.NODE_ENV === 'production' && initServiceWorker()
}
