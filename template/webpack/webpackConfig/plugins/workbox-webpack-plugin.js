const workboxPlugin = require('workbox-webpack-plugin')

module.exports = new workboxPlugin.InjectManifest({
  swSrc: './src/settings/ServiceWorker/sw.js',
  swDest: 'sw.js'
})
