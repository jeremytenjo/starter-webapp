import React, { lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'

const Home = lazy(() => import(/* webpackChunkName: 'Home' */ './home.index'))

export default () => (
  <Route
    path='/'
    render={() => (
      <>
        <Suspense fallback={null}>
          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
        </Suspense>
      </>
    )}
  />
)
