import shell from '../../utils/node/shell.js'
;(async function buildApp() {
  shell('tsc && vite build --config ./devtools/vite/config.ts')
})()
