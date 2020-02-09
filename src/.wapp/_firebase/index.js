import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

import enablePerfMonitoring from '@tenjojeremy/web-toolkit/analytics/firebase'

firebase.initializeApp({})

enablePerfMonitoring(firebase)
