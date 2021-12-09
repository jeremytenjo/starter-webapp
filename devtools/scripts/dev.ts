import shell from '../utils/node/shell.js'
;(async function dev() {
  shell(['npm run dev:app', 'npm run emulators:start'])
})()
