import { defineConfig } from 'vite'

import appConfig, { AppConfigTypes } from '../../app.config'

export type PayloadTypes = {
  appConfig: AppConfigTypes
  isProdMode: boolean
  isDevMode: boolean
}

// https://vitejs.dev/config/
export default defineConfig(async ({ mode }) => {
  const payload: PayloadTypes = {
    appConfig,
    isProdMode: mode === 'production',
    isDevMode: mode === 'development',
  }

  return {
    plugins: await (await import('./plugins')).default(payload),
    build: (await import('./build')).default(payload),
  }
})
