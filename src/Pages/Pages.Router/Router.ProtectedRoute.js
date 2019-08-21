// Vendors
import React, { memo } from 'react'
import { Redirect } from 'react-router-dom'

// Data
import userState from '../../User/User.state'

const ProtectedRoute = ({ children }) => {
  // Global State
  const { user } = userState()

  return user ? (
    <>{children}</>
  ) : (
    <Redirect
      to={{
        pathname: '/login',
      }}
    />
  )
}

// Exports
export default memo(ProtectedRoute)
