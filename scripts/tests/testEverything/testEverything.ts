import shell from '../../../devtools/utils/node/shell.cjs'
import runCypress from '../../../devtools/testing/cypress/scripts/runCypress/runCypress.js'

export default async function testEverything() {
  try {
    await shell('npm run testing:lint')
    await shell('npm run testing:check-types')
    await runCypress()
  } catch (error) {
    throw new Error(error)
  }
}
