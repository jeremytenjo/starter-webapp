import React from 'react'
import ReactDOM from 'react-dom'
import { hot } from 'react-hot-loader/root'
import { catchAddToHomeScreenPrompt } from '@tenjojeremy/web-toolkit/miscUtils/addToHomeScreen'

import hideSplashScreen from './.wapp/_splashScreen/hideSplashScreen'
import './.wapp/_firebase/index'
import './.wapp/_offlineSupport'
import Router from './pages/router'
import Store from './.wapp/_store'
import Materialui from './.wapp/_materialui'

const App = hot(() => (
  <Store>
    <Materialui>
      <Router />
    </Materialui>
  </Store>
))

// Load asynchronous
hideSplashScreen()
catchAddToHomeScreenPrompt()

ReactDOM.render(<App />, document.getElementById('root'))
