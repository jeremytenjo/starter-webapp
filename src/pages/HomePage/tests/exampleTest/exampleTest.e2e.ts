import { test } from '@playwright/test'

import exampleTest from './exampleTest.test'

test('Home Page', async ({ page }) => {
  await exampleTest({ page })
})
