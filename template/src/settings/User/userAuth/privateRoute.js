import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateComponent = ({ children, location }) => {
  let authed = true
  return (
    <>
      <Route
        render={() =>
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
}

export default PrivateComponent
