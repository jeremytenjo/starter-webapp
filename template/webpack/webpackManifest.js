const localIp = require('get-my-local-ip')

exports.manifest = {
  port: 3001,
  host: localIp.address,
  project_name: 'Webapp',
  project_short_name: 'Webapp',
  project_desc: 'Webapp Template',
  theme: {
    colorPrimary: '#C1F9EE',
    background_color: '#ffffff'
  }
}
