const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = function() {
  return new UglifyJsPlugin({
    uglifyOptions: {
      compress: {
        drop_console: true
      },
      output: {
        comments: false
      }
    }
  })
}
