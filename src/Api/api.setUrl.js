const setApiUrl = () => {
  process.env.NODE_ENV === 'development'
    ? (window.apiURL = 'http://localhost:5000/movies-series-guide/us-central1/search')
    : (window.apiURL = 'https://us-central1-movies-series-guide.cloudfunctions.net/api/')
}

export default setApiUrl
