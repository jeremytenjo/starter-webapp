import admin from 'firebase-admin'

import firebaseJson from '../../../firebase.json'
import firebaseConfig from '../config.js'

// initialization
process.env.FIRESTORE_EMULATOR_HOST = `localhost:${firebaseJson.emulators.firestore.port}`
admin.initializeApp(firebaseConfig)

const db = admin.firestore()

export default async function addMockDataToFirestore() {
  try {
    const keys = [...Array(10).keys()]
    keys.map(() =>
      db.collection('user').add({
        author_name: 'Jeremy tenjo' + Math.random(),
      }),
    )
    console.log('database seed was successful')
  } catch (error) {
    console.log(error, 'database seed failed')
  }
}

addMockDataToFirestore()
