import firebase from 'firebase/app'
import 'firebase/auth'

export default () =>
  new Promise((resolve, reject) => {
    try {
      firebase.auth().onuserStateChanged(async (user) => {
        user ? resolve(user) : resolve(false)
      })
    } catch (e) {
      reject(e)
    }
  })
