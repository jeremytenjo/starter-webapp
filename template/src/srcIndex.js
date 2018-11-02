//Vendors
import React from 'react'
import ReactDOM from 'react-dom'

//Settings
import './settings/Firebase/firebaseIndex'
import registerServiceWorker from './settings/ServiceWorker/swRegister'
import PublicStates from './settings/State/stateIndex'
import Router from './settings/Router/routerIndex'
import Theme from './settings/Theme/themeIndex'
import { apiSetUrl } from './settings/Api/apiIndex'

ReactDOM.render(
  <PublicStates>
    <Theme>
      <Router />
    </Theme>
  </PublicStates>,
  document.getElementById('root')
)

registerServiceWorker()
apiSetUrl()
