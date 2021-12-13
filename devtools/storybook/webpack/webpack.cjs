const getPlugins = require('./plugins/plugins.cjs')

module.exports = function StorybookWebpack(config) {
  config.plugins = getPlugins(config.plugins)

  return config
}
