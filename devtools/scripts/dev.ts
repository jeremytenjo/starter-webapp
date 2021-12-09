import shell from '../nodeUtils/shell.js'
;(async function dev() {
  shell(['npm run dev:app', 'npm run emulators:start'])
})()
