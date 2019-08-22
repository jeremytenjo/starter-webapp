const localIp = require('get-my-local-ip')
const { colors } = require('./src/Theme/Colors/colors.index.js')

const logoStringModule = require('./src/Images/logo/logo')
const { logoStringModule: logoString } = logoStringModule

const { headCss } = require('./src/Theme/Head/theme.head')

exports.manifest = {
  projectInfo: {
    name: 'Webapp',
    shortName: 'Webapp',
    description: 'Webapp',
    startUrl: '/',
    colors,
    logo: {
      path: 'src/Images/Logo/logo.png',
    },
    share_target: {
      action: '/profile/photos/',
      method: 'GET',
      enctype: 'application/x-www-form-urlencoded',
      params: {
        title: 'Upload image to Webapp',
        text: 'text',
        url: 'url',
      },
    },
  },
  analytics: {
    google: {
      analytics: { gAnalyticFunctions: { onlyViewsScript: '' } },
    },
  },
  webpack: {
    devServer: {
      port: 3001,
      host: localIp.address,
    },
    entry: './src/src.index.js',
    plugins: {
      html: {
        bodyHtmlSnippet: logoString,
        headCss,
      },
    },
  },
}
