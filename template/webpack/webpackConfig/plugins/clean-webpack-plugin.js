const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = function() {
  let pathsToClean = ['build']

  let cleanOptions = {
    verbose: true
  }
  return new CleanWebpackPlugin(pathsToClean, cleanOptions)
}
