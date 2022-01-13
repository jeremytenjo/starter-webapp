import cypress from 'cypress'

import getCypressConfig from '../../cypress.config.js'

export default function openCypress() {
  // https://docs.cypress.io/guides/guides/module-api#cypress-open
  cypress.open({
    config: getCypressConfig(),
  })
}
