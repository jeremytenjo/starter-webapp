//Vendors
import React, { lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'

//Components
import PrivateRoute from '../../User/userAuth/privateRoute'
import CoreTemplate from '../../Components/Templates/core'

const Home = lazy(() => import(/* webpackChunkName: 'home.index' */ './home.index'))

export default () => (
  <Switch>
    <Route
      exact
      path='/'
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
