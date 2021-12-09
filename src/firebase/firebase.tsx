import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { FirebaseProvider } from '@useweb/use-firebase'
import initializeFirebaseEmulator from '@useweb/start-firebase-emulator'

import firebaseConfig from './config'

const firebaseApp = initializeApp(firebaseConfig)
const auth = getAuth()
const db = getFirestore()

initializeFirebaseEmulator({ auth, db, enable: process.env.NODE_ENV === 'development' })

export default function Firebase({ children }) {
  return (
    <FirebaseProvider firebaseApp={firebaseApp} auth={auth} db={db}>
      {children}
    </FirebaseProvider>
  )
}
