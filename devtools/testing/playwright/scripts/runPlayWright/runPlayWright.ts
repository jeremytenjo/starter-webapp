import shell from '../../../../utils/node/shell.cjs'
import buildPlayWright from '../buildPlayWright/buildPlayWright.js'

export default async function runPlayWright() {
  await buildPlayWright()

  shell(
    'npx playwright test --config=devtools/testing/playwright/build/playwright.config.js',
  )
}
