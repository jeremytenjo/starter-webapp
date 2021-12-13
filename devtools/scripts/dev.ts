import shell from '../utils/node/shell.cjs'
;(async function dev() {
  shell(['npm run dev:app', 'npm run emulators:start'])
})()
