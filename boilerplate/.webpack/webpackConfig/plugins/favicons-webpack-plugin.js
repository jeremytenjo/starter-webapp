const path = require('path')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

module.exports = function() {
  return new FaviconsWebpackPlugin({
    logo: path.resolve('src/images/logo/logo.png'),
    persistentCache: false,
    prefix: 'images/public/',
    icons: {
      android: false,
      appleIcon: false,
      appleStartup: false,
      coast: false,
      favicons: true,
      firefox: false,
      opengraph: false,
      twitter: false,
      yandex: false,
      windows: false,
    },
  })
}
