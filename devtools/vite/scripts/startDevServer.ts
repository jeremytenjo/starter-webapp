import shell from '../../nodeUtils/shell.js'
;(async function startDevServer() {
  shell('vite --config ./devtools/vite/config.ts --host --port 3001')
})()
