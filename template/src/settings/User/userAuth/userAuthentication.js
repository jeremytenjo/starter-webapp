// Vendors
import React, { useState, useEffect, memo } from 'react'
import { useGlobal } from 'reactn'

// Functions
import authCheck from './userAuthCheck'
import { hideSplashPage } from './../../../components/atoms/SpashPage'

const UserAuthentication = ({ children }) => {
  // Global State
  const [, setuserIsAuthed] = useGlobal('userIsAuthed')
  const [, setuserInfo] = useGlobal('userInfo')

  // Local state
  const [didAuth, setdidAuth] = useState(false)

  // Effects
  useEffect(() => {
    check()
  }, [])
  // Functions

  const check = async () => {
    let userInfoDb

    userInfoDb = await authCheck()
    handleUserInfo(userInfoDb)
    hideSplashPage()
  }

  const handleUserInfo = (userInfoDb) => {
    if (userInfoDb) {
      setuserInfo(userInfoDb)
      setuserIsAuthed(true)
    }
    setdidAuth(true)
  }

  // Template
  return didAuth ? <>{children}</> : <></>
}

// Exports
export default memo(UserAuthentication)
