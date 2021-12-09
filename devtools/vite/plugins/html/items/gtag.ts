import { PayloadTypes } from '../../../config'

export default function gTag({ appConfig }: PayloadTypes) {
  return `
     <!-- Global site tag (gtag.js) - Google Analytics -->
     <script async src="https://www.googletagmanager.com/gtag/js?id=${appConfig.analytics.google.measurementId}"></script>
     <script>
       window.dataLayer = window.dataLayer || [];
       function gtag(){dataLayer.push(arguments);}
       gtag('js', new Date());  
       gtag('config', '${appConfig.analytics.google.measurementId}');
     </script>`
}
