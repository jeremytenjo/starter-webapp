import { test } from '@playwright/test'

import exampleTest from './testExampleTest'

test('Create timer', async ({ page }) => {
  await exampleTest({ page })
})
