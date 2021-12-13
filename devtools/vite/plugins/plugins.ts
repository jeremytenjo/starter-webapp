import { PayloadTypes } from '../config'

export default async function getVitePlugins(payload: PayloadTypes) {
  return [
    await (await import('./react')).default(),
    await (await import('./html/html')).default(payload),
    await (await import('./compression')).default(payload),
    await (await import('./pwa/pwa')).default(payload),
  ]
}
