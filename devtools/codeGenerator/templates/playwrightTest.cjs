// https://github.com/jeremytenjo/quick-component-creator/tree/master#component-type-properties
const files = [
  {
    path: ({ name }) => `${name}.test.ts`,
    template: ({ name }) => {
      return `// https://playwright.dev/docs/selectors
import { expect } from '@playwright/test'

export default async function ${name}({ page }) {
  await page.goto('/')

  const header = await page.innerText('h1')
  expect(header).toBe('Home Page')
}

      
      `
    },
  },
  {
    path: ({ name }) => `${name}.e2e.ts`,
    template: ({ name }) => {
      return `import { test } from '@playwright/test'

      import ${name} from './${name}.test'
      
      test('Testname', async ({ page }) => {
        await ${name}({ page })
      })
      
      `
    },
  },
]

const template = {
  type: 'Playwright test',
  files,
}

module.exports = {
  files,
  template,
}
