const localIp = require('get-my-local-ip')

exports.manifest = {
  port: 3001,
  host: localIp.address,
  project_name: 'App Template React',
  project_short_name: 'ATR',
  project_desc: 'App template react description',
  theme: {
    colorPrimary: '#24c3a9',
    background_color: '#ffffff'
  }
}
