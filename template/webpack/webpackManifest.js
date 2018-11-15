const localIp = require('get-my-local-ip')

exports.manifest = {
  port: 3001,
  host: localIp.address,
  projectInfo: {
    name: 'Webapp',
    shortName: 'Webapp',
    description: 'Webapp Template'
  },  
  theme: {
    colors: {
      primary: '#DAD2F0',
      background: '#ffffff'
    },
    logo: {
      path: 'src/images/logo/logo.png'
    }      
  }
}
