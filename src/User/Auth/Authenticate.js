import React, { useEffect, memo } from 'react'
import { hideSplashPage } from '@tenjojeremy/web-toolkit/build/Feedback/SplashPage/SplashPage'

import UserState from '../User.state'

import useAuth from './useAuth'

const UserAuthentication = ({ children }) => {
  const historyRouter = window.historyRouter
  // Global State
  const { updateUser } = UserState()
  const { attemptSignIn } = useAuth()

  // Effects
  useEffect(() => {
    check()
  }, [])

  // Functions
  const check = async () => {
    if (attemptSignIn) {
      const { res = null, redirect = null } = await attemptSignIn()

      updateUser(res)
      hideSplashPage()
      redirect && historyRouter.push(redirect)
    }
  }

  // Template
  return <>{children}</>
}

export default memo(UserAuthentication)
