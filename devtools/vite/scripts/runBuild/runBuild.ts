import shell from '../../../utils/node/shell.cjs'

export default async function runBuild() {
  shell('vite preview --config ./devtools/vite/config.ts --port 8080 --host')
}
