const concurrently = require('concurrently')

/**
 * @example
// run single command 
 * shell('npm run start')
 * 
// run concurrently
 * shell(['npm run start:app', 'npm run start:storybook'])
 */
module.exports = function shell(commands) {
  const _commands = typeof commands === 'string' ? [commands] : commands

  concurrently(_commands, {
    prefix: 'none',
  })
}
