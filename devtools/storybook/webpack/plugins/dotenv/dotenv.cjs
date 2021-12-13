const path = require('path')

const parseEnvFile = require('../../../../utils/node/parseEnvFile.cjs')
const deepMerge = require('../../../../utils/deepMerge.cjs')

module.exports = function webpackDotEnv(defaultEnvs) {
  if (!defaultEnvs.definitions['process.env']) {
    return defaultEnvs
  }
  const DefinePlugin = defaultEnvs
  const envFilePath = path.join(process.cwd(), '.env')
  const localEnvDefinitions = parseEnvFile({ envFilePath }) || {}
  const processEnvDefinitions = deepMerge(
    defaultEnvs.definitions['process.env'],
    localEnvDefinitions,
  )

  DefinePlugin.definitions['process.env'] = processEnvDefinitions

  return DefinePlugin
}
