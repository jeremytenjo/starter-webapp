import { PayloadTypes } from '../config'

export default function viteBuild({}: PayloadTypes) {
  return {
    outDir: 'build',
  }
}
