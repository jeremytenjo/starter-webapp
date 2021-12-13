import shell from '../../../utils/node/shell.cjs'
import appConfig from '../../../../app.config.js'

export default async function startDevServer() {
  shell(
    `vite --config ./devtools/vite/config.ts --host --port ${appConfig.server.local.port}`,
  )
}
