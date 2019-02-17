// Vendors
import React, { useState, useEffect, memo } from 'react'

// Functions
import authCheck from './userAuthCheck'
import { hideSplashPage } from '../../Components/atoms/SpashPage'

// Data
import userState from '../User.state'

const UserAuthentication = ({ children }) => {
  // Global State
  const { updateUser } = userState()

  // Local state
  const [didAuth, setdidAuth] = useState(false)

  // Effects
  useEffect(() => {
    check()
  }, [])

  // Functions
  const check = async () => {
    let userDb = null

    userDb = await authCheck()
    userDb ? updateUser(userDb) : updateUser(false)
    setdidAuth(true)
    hideSplashPage()
  }

  // Template
  return didAuth ? <>{children}</> : <></>
}

// Exports
export default memo(UserAuthentication)
