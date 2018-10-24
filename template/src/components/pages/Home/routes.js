import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Loadable from 'react-loadable'
import PrivateRoute from '../../../settings/User/Auth/privateRoute'
import CoreTemplate from '../../templates/Core'

const Home = Loadable({
  loader: () => import(/* webpackChunkName: 'Home' */ './Home'),
  loading: () => null
})

export default () => (
  <Switch>
    <Route
      exact
      path="/"
      render={() => (
        <PrivateRoute>
          <CoreTemplate>
            <Home />
          </CoreTemplate>
        </PrivateRoute>
      )}
    />
  </Switch>
)
