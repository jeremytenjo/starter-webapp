import { createHtmlPlugin } from 'vite-plugin-html'

import { PayloadTypes } from '../../vite'
import { getinitialLoadedLogoString } from '../../../helpers/assets/generateLogoAssets/helpers/createInitialLoadedLogo/createInitialLoadedLogo'

import googleAnalyticsScript from './items/googleAnalyticsScript'
import registerServiceWorker from './items/serviceWorker'

// https://github.com/anncwb/vite-plugin-html
export default async function viteHtmlPlugin(payload: PayloadTypes) {
  return createHtmlPlugin({
    inject: {
      data: {
        title: `<title>${payload.appConfig.manifestJson.name}</title>`,
        description: `<meta name="description" content="${payload.appConfig.manifestJson.description}" />`,
        icons: `<link rel="apple-touch-icon" href="images/logo/assets/apple/apple-touch-icon.png">`,
        googleAnalytics: googleAnalyticsScript(payload),
        registerServiceWorker: registerServiceWorker({ isProdMode: payload.isProdMode }),
        themeColor: `<meta name="theme-color" content="${payload.appConfig.manifestJson.theme_color}" />`,
        initialLoadedLogo: await getinitialLoadedLogoString(),
        customCriticalStyles: `
        <style>
          body {
            background-color: ${payload.appConfig.theme.tokens.colors.backgroundColor};
          }
        </style>
        `,
      },
    },
  })
}
