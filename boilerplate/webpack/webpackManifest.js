const localIp = require('get-my-local-ip')
const ThemeManifestModule = require('../src/Theme/themeManifest')
const { ThemeManifest: theme } = ThemeManifestModule

const logoStringModule = require('../src/Images/logo/logo')
const { logoStringModule: logoString } = logoStringModule

exports.manifest = {
  port: 3001,
  host: localIp.address,
  projectInfo: {
    name: 'Webapp',
    shortName: 'Webapp',
    description: 'Webapp Template',
    logo: {
      path: 'src/images/logo/logo.png'
    }
  },
  theme,
  webpack: {
    plugins: {
      html: {
        bodyHtmlSnippet: logoString
      }
    }
  }
}
