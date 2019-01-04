const workboxPlugin = require('workbox-webpack-plugin')

module.exports = function() {
  return new workboxPlugin.InjectManifest({
    swSrc: './src/ServiceWorker/sw.js',
    swDest: 'sw.js'
  })
}
