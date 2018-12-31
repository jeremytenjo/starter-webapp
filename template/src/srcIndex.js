//Vendors
import React from 'react'
import ReactDOM from 'react-dom'

//Settings
import './settings/Firebase/firebaseIndex'
// import { swRegister } from './settings/ServiceWorker/swIndex'
import Store from './store/storeIndex'
import Router from './settings/Router/routerIndex'
import Theme from './settings/Theme/themeIndex'
import { apiSetUrl } from './settings/Api/apiIndex'
import UserAuthentication from './settings/User/userAuth/userAuthentication'

ReactDOM.render(
  <UserAuthentication>
    <Store>
      <Theme>
        <Router />
      </Theme>
    </Store>
  </UserAuthentication>,
  document.getElementById('root')
)

// swRegister()
apiSetUrl()
