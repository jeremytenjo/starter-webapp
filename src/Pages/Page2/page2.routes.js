//Vendors
import React, { lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'

//Components
import PrivateRoute from '../Pages.Router/Router.ProtectedRoute'
import CoreTemplate from '../../Templates/core'

const Page2 = lazy(() => import(/* webpackChunkName: 'Page2Index' */ './page2.index'))

export default () => (
  <Switch>
    <Route
      exact
      path='/Page2'
      render={() => (
        <PrivateRoute>
          <CoreTemplate>
            <Suspense fallback={null}>
              <Page2 />
            </Suspense>
          </CoreTemplate>
        </PrivateRoute>
      )}
    />
  </Switch>
)
