const setApiUrl = () => {
  process.env.NODE_ENV === 'development'
    ? (window.apiURL = 'http://localhost:5001/estilistta/us-central1/api/')
    : (window.apiURL = 'https://us-central1-estilistta.cloudfunctions.net/api/')
}

export default setApiUrl
