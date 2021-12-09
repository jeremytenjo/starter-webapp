import getCommandLineArgs from '../../../utils/node/getCommandLineArgs.js'

import generateLogoAssets from './generateLogoAssets'

const optionDefinitions = [
  { name: 'logoPath', type: String },
  {
    name: 'folderOutputPath',
    type: String,
  },
]
const scriptArgs = getCommandLineArgs(optionDefinitions)

generateLogoAssets(scriptArgs)
