import shell from '../../../utils/node/shell.cjs'

export default async function startDevServer() {
  shell(`vite --config ./devtools/vite/config.ts --host --port 3001`)
}
