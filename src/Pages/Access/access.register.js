import React, { useState } from 'react'

// import userRegister from '../../../settings/User/userRegister'

const Register = () => {
  // State
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // Funcitons
  const onchangeEmail = (e) => {
    const value = e.target.value
    setEmail(value)
  }

  const onchangePassword = (e) => {
    const value = e.target.value
    setPassword(value)
  }

  const signIn = (e) => {
    e.preventDefault()
    // userRegister(email, password)
  }

  // Template
  return (
    <form onSubmit={signIn}>
      <input value={email} onChange={onchangeEmail} placeholder='email' />
      <input
        value={password}
        onChange={onchangePassword}
        placeholder='password'
        type='password'
      />
      <button type='submit'>SUBMIT</button>
    </form>
  )
}

export default Register
