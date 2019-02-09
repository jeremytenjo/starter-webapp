import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Access from './accessIndex'

export default () => (
  <Switch>
    <Route path='/login' component={Access} />
    <Route path='/register' component={Access} />
  </Switch>
)
