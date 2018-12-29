//Vendors
import React from 'react'
import ReactDOM from 'react-dom'

//Settings
import './settings/Firebase/firebaseIndex'
import { swRegister } from './settings/ServiceWorker/swIndex'
import PublicStates from './settings/State/stateIndex'
import Router from './settings/Router/routerIndex'
import Theme from './settings/Theme/themeIndex'
import { apiSetUrl } from './settings/Api/apiIndex'
import UserAuthentication from './settings/User/userAuth/userAuthentication'

ReactDOM.render(
  <UserAuthentication>
    <PublicStates>
      <Theme>
        <Router />
      </Theme>
    </PublicStates>
  </UserAuthentication>,
  document.getElementById('root')
)

swRegister()
apiSetUrl()
