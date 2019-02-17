//Vendors
import React from 'react'
import ReactDOM from 'react-dom'

//Settings
import './Configs/configFirebase'
// import { swRegister } from './ServiceWorker/swIndex'
// import UserAuthentication from './User/userAuth/User.authentication.js'
// Wrapp render with <UserAuthentication> to enable authenicatin and set user initial state to null

import Store from './Store/Store.index'
import Router from './Pages/Pages.Router/Router.index'
import Theme from './Theme/theme.index'
import { apiSetUrl } from './Api/apiIndex'
import { addToHomeScreenInit } from './Utilities/Misc/AddToHomeScreen/addToHomeScreen.index'

ReactDOM.render(
  <Store>
    <Theme>
      <Router />
    </Theme>
  </Store>,
  document.getElementById('root'),
)

// swRegister()
apiSetUrl()
addToHomeScreenInit()
