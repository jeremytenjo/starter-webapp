import cypress from 'cypress'

import getCypressConfig from '../../cypress.config.js'
import runDev from '../../../../../scripts/dev/dev.js'

export default async function runCypress() {
  runDev({
    onReady: async () => {
      // https://docs.cypress.io/guides/guides/module-api#cypress-run
      const result = await cypress.run({
        config: getCypressConfig(),
      })

      if (result.status === 'failed') throw new Error(result.message)
    },
  })
}
