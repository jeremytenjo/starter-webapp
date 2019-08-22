import React, { useState, memo, useEffect } from 'react'

import UserState from '../../User/User.state'
import signIn from '../../User/Auth/auth.signIn'
import BASE_URL from '../../Router/router.constants'

const Login = () => {
  // Local
  const historyRouter = window.historyRouter

  // State
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [msgError, setMsgError] = useState('')

  // Global State
  const { user, updateUser } = UserState()

  // Effect
  useEffect(() => {
    const { id } = user
    id && redirectToBase()
  }, [user])

  // Functions
  const onchangeEmail = ({ target: { value } }) => setEmail(value)

  const onchangePassword = ({ target: { value } }) => setPassword(value)

  const redirectToBase = () => historyRouter.push(BASE_URL)

  const signUserIn = async (e) => {
    e.preventDefault()
    const signInRes = await signIn({ email, password })
    const { errMsg, user } = signInRes

    if (signInRes) {
      updateUser(user)
      redirectToBase()
    } else setMsgError(errMsg)
  }

  // TEmplate
  return (
    <form>
      <input type='text' value={email} onChange={onchangeEmail} placeholder='email' />
      <input value={password} onChange={onchangePassword} placeholder='password' type='password' autoComplete='on' />
      <button onClick={signUserIn}>Sign In </button>
      <span>{msgError}</span>
    </form>
  )
}

export default memo(Login)
