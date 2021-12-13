const getPlugins = require('./plugins')

module.exports = function StorybookWebpack(config) {
  config.plugins = getPlugins(config.plugins)

  return config
}
