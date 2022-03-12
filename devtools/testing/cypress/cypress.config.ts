import getAppConfig from '../../../app.config.js'

export default async function getCypressConfig() {
  const appConfig = await getAppConfig()
  const cypressFolderPath = 'devtools/testing/cypress'
  // https://docs.cypress.io/guides/references/configuration#Options
  const cypressConfig: Cypress.ConfigOptions = {
    projectId: 'hy2gou',
    testFiles: '**/*cy.js',
    baseUrl: `http://localhost:${appConfig.server.local.port}`,
    integrationFolder: 'src',
    supportFile: false,
    pluginsFile: false,
    video: false,
    downloadsFolder: `${cypressFolderPath}/downloads`,
    fixturesFolder: `${cypressFolderPath}/fixtures`,
    screenshotsFolder: `${cypressFolderPath}/screenshots`,
    videosFolder: `${cypressFolderPath}/videos`,
  }

  return cypressConfig
}
