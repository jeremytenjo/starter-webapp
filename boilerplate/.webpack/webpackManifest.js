const localIp = require('get-my-local-ip')

// Theme Manifest
const ThemeManifestModule = require('../src/Theme/Manifest')
const { ThemeManifest: theme } = ThemeManifestModule

// logo
const logoStringModule = require('../src/Images/logo/logo')
const { logoStringModule: logoString } = logoStringModule

// Google Analytics manifest
const gaManifestModules = require('../analytics/google/googleAnalytics/gaManifest')

exports.manifest = {
  port: 3001,
  host: localIp.address,
  projectInfo: {
    name: 'Webapp',
    shortName: 'Webapp',
    description: 'Webapp Template',
    logo: {
      path: 'src/images/logo/logo.png',
    },
  },
  analytics: {
    google: {
      analytics: gaManifestModules,
    },
  },
  theme,
  webpack: {
    plugins: {
      html: {
        bodyHtmlSnippet: logoString,
      },
    },
  },
}
