import validateAgainstUserSchema from '../User.schema'

import fbLogin from './Vendors/FirebaseAuth/SignIn/signIn.email'
import { cmSave } from './WebApis/CredentialMangment/cm.index'

export default async ({ email, password }) => {
  // Validate with Schema
  let dataIsValid = await validateAgainstUserSchema({ email, password })
  if (!dataIsValid) return { errMsg: 'Server error' }

  // Firebase Login
  let user = await fbLogin(email, password)

  let { errMsg, type } = user
  if (!type) return { errMsg }

  const {
    userData: {
      user: { photoURL, displayName, uid },
    },
  } = user

  const userInfo = {
    id: uid,
    email,
    password,
    photoURL,
    name: displayName,
  }

  // Save cred to Credential Manager
  cmSave(userInfo)

  return { user: userInfo }
}
