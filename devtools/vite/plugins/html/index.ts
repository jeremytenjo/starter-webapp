import { injectHtml } from 'vite-plugin-html'

import { PayloadTypes } from '../../config'

import gtag from './items/gtag'
import registerServiceWorker from './items/serviceWorker'

// https://github.com/anncwb/vite-plugin-html
export default function viteHtmlPlugin(payload: PayloadTypes) {
  return injectHtml({
    data: {
      title: `<title>${payload.appConfig.manifestJson.name}</title>`,
      description: `<meta name="description" content="${payload.appConfig.manifestJson.description}" />`,
      icons: `<link rel="apple-touch-icon" href="images/logo/assets/sizes/152x152.png">`,
      gtag: gtag(payload),
      registerServiceWorker: registerServiceWorker({ isProdMode: payload.isProdMode }),
    },
  })
}
