import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './'

export default () => (
  <Switch>
    <Route path='/' component={Home} />
  </Switch>
)
