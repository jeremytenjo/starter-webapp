export default async function() {
  const registerServiceWorker = () => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
      try {
        const registration = await navigator.serviceWorker.register('/sw.js')
      } catch (error) {
          console.log(error)
        }
      })    
    }
  }
  process.env.NODE_ENV === 'production' && registerServiceWorker()
}
