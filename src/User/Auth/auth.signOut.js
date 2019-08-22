import firebaseAuthSignOut from './Vendors/FirebaseAuth/fbAuth.signout'
import { cmSignOut } from './WebApis/CredentialMangment/cm.index'

export default () => {
  // Sign out Firebase
  firebaseAuthSignOut()

  // Sign out Credentail Managment API
  cmSignOut()

  // Redirect
  window.location = '/login'
}
