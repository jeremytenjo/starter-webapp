// Vendors
import React, { useState, useEffect, memo } from 'react'
import { useGlobal } from 'reactn'
import { Route, Redirect } from 'react-router-dom'

const PrivateComponent = ({ component: Component, ...rest }) => {
  // Global State
  const [userIsAuthed, ,] = useGlobal('userIsAuthed')

  return (
    <Route
      {...rest}
      render={(props) =>
        userIsAuthed ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location }
            }}
          />
        )
      }
    />
  )
}

// Exports
export default memo(PrivateComponent)
