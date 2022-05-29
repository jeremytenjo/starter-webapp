import shell from '../../../utils/node/shell.cjs'

export default function buildLadle() {
  shell('ladle build --config ./devtools/ladle')
}
