import React, { lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'

import Access from './access.index'

const Login = lazy(() =>
  import(/* webpackChunkName: 'Login' */ './access.login'),
)
const Register = lazy(() =>
  import(/* webpackChunkName: 'Register' */ './access.register'),
)

export default () => (
  <Switch>
    <Route
      exact
      path='/login'
      render={() => (
        <Access>
          <Suspense fallback={null}>
            <Login />
          </Suspense>
        </Access>
      )}
    />

    <Route
      exact
      path='/register'
      render={() => (
        <Access>
          <Suspense fallback={null}>
            <Register />
          </Suspense>
        </Access>
      )}
    />
  </Switch>
)
