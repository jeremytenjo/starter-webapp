import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Loadable from 'react-loadable'
import PrivateRoute from '../../../settings/User/Auth/privateRoute'
import CoreTemplate from '../../templates/Core'

const Page2 = Loadable({
  loader: () => import(/* webpackChunkName: 'Page2' */ './Page2'),
  loading: () => null
})

export default () => (
  <Switch>
    <Route
      exact
      path="/Page2"
      render={() => (
        <PrivateRoute>
          <CoreTemplate>
            <Page2 />
          </CoreTemplate>
        </PrivateRoute>
      )}
    />
  </Switch>
)
