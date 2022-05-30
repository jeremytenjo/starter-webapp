import concurrently from 'concurrently'

/**
 * @example
// run single command 
 * shell('npm run start')
 * 
// run concurrently
 * shell(['npm run start:app', 'npm run start:storybook'])
 */
export default async function shell(commands) {
  const _commands = !Array.isArray(commands) ? [commands] : commands

  const { result } = concurrently(_commands, {
    prefix: 'none',
  })

  await result
}
