import viteCompression from 'vite-plugin-compression'

import { PayloadTypes } from '../../config'

// https://github.com/anncwb/vite-plugin-compression
export default function viteCompressPlugin({ isProdMode }: PayloadTypes) {
  return isProdMode
    ? viteCompression({
        algorithm: 'brotliCompress',
        ext: 'br',
      })
    : () => null
}
