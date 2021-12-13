const dotenv = require('./dotenv')

module.exports = (storybookDefaultPlugins) => {
  const updatedPlugins = storybookDefaultPlugins.map((plugin) => {
    switch (plugin.constructor.name) {
      case 'DefinePlugin':
        plugin = dotenv(plugin)
        break
    }

    return plugin
  })

  return updatedPlugins
}
