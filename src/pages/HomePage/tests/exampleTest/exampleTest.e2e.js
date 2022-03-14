import { test } from '@playwright/test'

import exampleTest from './testExampleTest.js'

test('Create timer', async ({ page }) => {
  await exampleTest({ page })
})
