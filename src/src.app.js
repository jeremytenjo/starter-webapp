import React from 'react'
import { hot } from 'react-hot-loader/root'
import './Vendors/Firebase/firebase.index'
import '@tenjojeremy/web-toolkit/build/Data-Display/Map/Vendors/Google/config'
import { catchAddToHomeScreenPrompt } from '@tenjojeremy/web-toolkit/build/Misc-Utils/AddToHomeScreen/addToHomeScreen.index'

import setApiUrl from './Api/api.setUrl'
import Store from './Store/Store.index'
import Theme from './Theme/theme.index'
import Router from './Router/router.index'
import UserAuthAuthenticate from './User/Auth/Authenticate'

export default hot(() => (
  <Store>
    <UserAuthAuthenticate>
      <Theme>
        <Router />
      </Theme>
    </UserAuthAuthenticate>
  </Store>
))

// Load asynchronous
catchAddToHomeScreenPrompt()
setApiUrl()
