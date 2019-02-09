//Vendors
import React, { useState, memo } from 'react'

// Functions
import firebaseAuthLogin from '../../User/userAuth/Vendors/FirebaseAuth/fbAuthLogin/fbAuthLoginIndex'
import cmSave from '../../User/userAuth/WebApis/CredentialMangment/cmSave'

// Data
import userState from '../../User/userState'

const Login = () => {
  // Local
  const historyRouter = window.historyRouter
  let user

  // State
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [msgError, setMsgError] = useState('')

  // Global State
  const { updateUser } = userState()

  // Functions
  const onchangeEmail = (e) => {
    const value = e.target.value
    setEmail(value)
  }

  const onchangePassword = (e) => {
    const value = e.target.value
    setPassword(value)
  }

  const loginUser = async (e) => {
    e.preventDefault()

    // Firebase Login
    user = await firebaseAuthLogin('email', email, password)

    if (user.type) {
      // Save cred to Credentail Manager
      cmSave(email, password)

      // Save in state
      updateUser(user)
    }

    user.type ? historyRouter.push('/explore') : setMsgError(user.errMsg)
  }

  // TEmplate
  return (
    <form onSubmit={loginUser}>
      <input value={email} onChange={onchangeEmail} placeholder='email' />
      <input value={password} onChange={onchangePassword} placeholder='password' type='password' />
      <button type='submit'>SUBMIT</button>
      <span>{msgError}</span>
    </form>
  )
}

// Export
export default memo(Login)
