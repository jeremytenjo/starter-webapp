//Helper Modules
const path = require('path')
const chalk = require('chalk')

//Loaders
const loaders = require('./loaders')

// Plugins
const html_webpack_plugin = require('./plugins/html-webpack-plugin.js')
const favicons_webpack_plugin = require('./plugins/favicons-webpack-plugin.js')
const webpack_pwa_manifest = require('./plugins/webpack-pwa-manifest.js')
const html_beautify_webpack_plugin = require('./plugins/html-beautify-webpack-plugin.js')
const workbox_webpack_plugin = require('./plugins/workbox-webpack-plugin.js')
const uglifyjs_webpack_plugin = require('./plugins/uglifyjs-webpack-plugin.js')

// Manifest
const wepbackManifestFile = require('./webpackManifest.js')
const wepbackManifest = wepbackManifestFile.manifest

// Export
module.exports = {
  entry: './src/srcIndex.js',
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: '[name].bundle.js'
  },
  devtool: 'cheap-module-source-map',
  devServer: {
    port: wepbackManifest.port,
    host: wepbackManifest.host,
    compress: true,
    quiet: true,
    overlay: true,
    clientLogLevel: 'none',
    historyApiFallback: true,
    after: function(app) {
      console.clear()
      console.log(chalk.yellow(`You can now view your app in the browser.`))
      console.log()
      console.log(
        `  ${chalk.cyanBright('On Your Network:')}  http://${wepbackManifest.host}:${chalk.cyanBright(
          wepbackManifest.port
        )}/`
      )
      console.log()
      console.log(chalk.cyan('Note that the development build is not optimized.'))
      console.log(chalk.cyan(`To create a production build, use yarn build`))
      console.log()
    }
  },
  performance: {
    hints: process.env.NODE_ENV === 'production' ? 'warning' : false
  },
  optimization: {
    minimizer: [uglifyjs_webpack_plugin()]
  },
  module: {
    rules: loaders
  },
  plugins: [
    html_webpack_plugin(wepbackManifest.project_name, wepbackManifest.project_desc, wepbackManifest.theme),
    webpack_pwa_manifest(
      wepbackManifest.theme,
      wepbackManifest.project_name,
      wepbackManifest.project_desc,
      wepbackManifest.project_short_name
    ),
    favicons_webpack_plugin(),
    html_beautify_webpack_plugin,
    workbox_webpack_plugin
  ]
}