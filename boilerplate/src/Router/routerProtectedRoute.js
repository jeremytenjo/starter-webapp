// Vendors
import React, { memo } from 'react'
import { Route, Redirect } from 'react-router-dom'

// Data
import userState from '../User/User.state'

const ProtectedRoute = ({ component: Component, ...rest }) => {
  // Global State
  const { user } = userState()

  // Template
  return (
    <Route
      {...rest}
      render={(props) =>
        user ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  )
}

// Exports
export default memo(ProtectedRoute)
