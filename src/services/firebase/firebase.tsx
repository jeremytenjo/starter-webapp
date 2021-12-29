import React from 'react'
import { initializeApp } from 'firebase/app'
import { FirebaseProvider } from '@useweb/use-firebase'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getFunctions } from 'firebase/functions'

import firebaseConfig from './config'

const firebaseApp = initializeApp(firebaseConfig)
const auth = getAuth()
const db = getFirestore()
const functions = getFunctions()
// const messaging = getMessaging()

export default function Firebase({ children }) {
  return (
    <FirebaseProvider
      firebaseApp={firebaseApp}
      firebaseConfig={firebaseConfig}
      functions={functions}
      db={db}
      auth={auth}
      envIsDev={process.env.NODE_ENV === 'development'}
    >
      {children}
    </FirebaseProvider>
  )
}
