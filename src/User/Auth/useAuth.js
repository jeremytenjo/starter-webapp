import { useState } from 'react'

import BASE_URL from '../../Router/router.constants'

import firebaseAuth from './Vendors/FirebaseAuth/fbAuthCheck'

export default () => {
  const [signinIng, setSignining] = useState(null)
  const [error, setError] = useState(null)

  let userRes = null
  let res = null
  let cmUser = null

  const attemptSignIn = async () => {
    setSignining(true)

    userRes = await firebaseAuth()

    if (userRes) {
      const { uid, displayName, email, photoURL } = userRes

      res = {
        id: uid,
        name: displayName,
        email,
        photoURL,
      }
      return { res }
    } else {
      // Check Credential Manager if not Signed in fiebase
      const cmModule = await import('./WebApis/CredentialMangment/cm.index')
      cmUser = await cmModule.cmGet()

      if (cmUser) {
        const { password } = cmUser

        const signInModule = await import('./auth.signIn')
        res = await signInModule.default({ email: cmUser.id, password })
        const { errMsg, user } = res

        setError(errMsg)
        setSignining(false)

        return { res: user, redirect: BASE_URL }
      } else {
        return { res: false }
      }
    }
  }

  return { attemptSignIn, signinIng, error }
}
