//Vendors
import React from 'react'
import ReactDOM from 'react-dom'

//Settings
import './Configs/configFirebase'
import { swRegister } from './ServiceWorker/swIndex'
import Store from './Store/storeIndex'
import Router from './Router/routerIndex'
import Theme from './Theme/themeIndex'
import { apiSetUrl } from './Api/apiIndex'
import UserAuthentication from './User/userAuth/userAuthentication'
import addToHomeScreen from './Utilities/addToHomeScreen'

ReactDOM.render(
  <UserAuthentication>
    <Store>
      <Theme>
        <Router />
      </Theme>
    </Store>
  </UserAuthentication>,
  document.getElementById('root'),
)

swRegister()
apiSetUrl()
addToHomeScreen()
