const colors = require('./src/theme/colors.js')
const firebaseConfig = require(`./src/firebase/firebase.config`)

module.exports = {
  projectInfo: {
    name: 'Webapp Starter',
    shortName: 'Webapp Starter',
    description: 'Webapp Starter',
    startUrl: '/',
    colors,
    logo: {
      path: 'src/images/logo',
    },
  },
  authentication: 'firebase',
  database: 'firestore',
  theme: { vendors: 'materialui' },
  firebase: {
    config: firebaseConfig,
  },
  docs: {
    config: {
      port: 6006,
      panelPosition: 'right',
      theme: { base: 'dark' },
      showPanel: false,
    },
  },
}
