//Vendors
import React from 'react'
import ReactDOM from 'react-dom'

//Settings
import './settings/Firebase/firebaseIndex'
import ServiceWorker from './settings/ServiceWorker/swIndex'
import PublicStates from './settings/State/stateIndex'
import Router from './settings/Router/routerIndex'
import Theme from './settings/Theme/themeIndex'
import loadApiSettings from './settings/Api/loader'

ReactDOM.render(
  <PublicStates>
    <Theme>
      <Router />
    </Theme>
  </PublicStates>,
  document.getElementById('root')
)
// Load asynchronous
ServiceWorker()
loadApiSettings()
