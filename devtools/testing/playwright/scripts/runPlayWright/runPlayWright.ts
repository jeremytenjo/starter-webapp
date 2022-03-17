import path from 'path'

import watchFolders from '../../../../utils/node/watchFolders.js'
import shell from '../../../../utils/node/shell.cjs'
import buildPlayWright from '../buildPlayWright/buildPlayWright.js'
import getCommandLineArgs from '../../../../utils/node/getCommandLineArgs.js'

export default async function runPlayWright() {
  const { watch } = getCommandLineArgs([
    {
      name: 'watch',
      type: Boolean,
    },
  ])

  await runPlaywrightTests()

  if (watch) {
    const folderToWatch = path.join(process.cwd(), 'src')

    watchFolders({
      folderToWatch,
      onChange: runPlaywrightTests,
    })
  }
}

const runPlaywrightTests = async () => {
  await buildPlayWright()

  shell(
    'npx playwright test --config=devtools/testing/playwright/build/playwright.config.js',
  )
}
