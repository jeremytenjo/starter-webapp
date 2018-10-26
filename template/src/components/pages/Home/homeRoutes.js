import React, { lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import Loadable from 'react-loadable'
import PrivateRoute from '../../../settings/User/Auth/privateRoute'
import CoreTemplate from '../../templates/Core'

const Home = lazy(() => import(/* webpackChunkName: 'Home' */ './Home'))

export default () => (
  <Switch>
    <Route
      exact
      path="/"
      render={() => (
        <PrivateRoute>
          <CoreTemplate>
            <Suspense fallback={null}>
              <Home />
            </Suspense>
          </CoreTemplate>
        </PrivateRoute>
      )}
    />
  </Switch>
)
