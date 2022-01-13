import cypress from 'cypress'

import getCypressConfig from '../../cypress.config.js'

export default function runCypress() {
  // https://docs.cypress.io/guides/guides/module-api#cypress-run
  cypress.run({
    config: getCypressConfig(),
  })
}
