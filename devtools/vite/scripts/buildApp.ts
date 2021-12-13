import shell from '../../utils/node/shell.cjs'
;(async function buildApp() {
  shell('tsc && vite build --config ./devtools/vite/config.ts')
})()
