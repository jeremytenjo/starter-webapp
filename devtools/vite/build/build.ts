import { PayloadTypes } from '../vite'

export default function viteBuild({}: PayloadTypes) {
  return {
    outDir: 'build',
    target: 'es2021',
  }
}
