import shell from '../../../devtools/utils/node/shell.js'

export default async function testEverything() {
  try {
    await shell('npm run test:eslint')
    await shell('npm run test:ts-types')
  } catch (error) {
    throw new Error(error)
  }
}
