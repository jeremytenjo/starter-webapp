import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateComponent = ({ children, location }) => (
  <>
    <Route
      render={(children, location, authed = true) =>
        authed === true ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: {
                from: location
              }
            }}
          />
        )
      }
    />
  </>
)

export default PrivateComponent
