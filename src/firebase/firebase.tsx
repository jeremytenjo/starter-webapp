import React from 'react'
import { initializeApp } from 'firebase/app'
import { FirebaseProvider } from '@useweb/use-firebase'
// import initializeFirebaseEmulator from '@useweb/start-firebase-emulator'
// import { getFirestore } from 'firebase/firestore'
// import { getAuth } from 'firebase/auth'
import { getFunctions } from 'firebase/functions'

import firebaseConfig from './config'

const firebaseApp = initializeApp(firebaseConfig)
// const auth = getAuth()
// const db = getFirestore()
const functions = getFunctions()
// const messaging = getMessaging()

// initializeFirebaseEmulator({ auth, db, enable: process.env.NODE_ENV === 'development' })

export default function Firebase({ children }) {
  return (
    <FirebaseProvider firebaseApp={firebaseApp} functions={functions}>
      {children}
    </FirebaseProvider>
  )
}
