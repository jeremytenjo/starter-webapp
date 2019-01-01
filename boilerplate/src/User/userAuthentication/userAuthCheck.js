import firebaseAuth from './Vendors/FirebaseAuth/fbAuthCheck'
import credentialManager from './WebApis/CredentialMangment/cmGet'

export default () =>
  new Promise(async (resolve) => {
    let userInfo

    // Check firebase
    userInfo = await firebaseAuth()
    if (userInfo) {
      resolve(userInfo)
    } else {
      // Check Credential Manager not logged in firebase
      userInfo = await credentialManager()
      userInfo ? resolve(userInfo) : resolve(false)
    }
  })
