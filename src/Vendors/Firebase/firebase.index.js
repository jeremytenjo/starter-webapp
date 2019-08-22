import firebase from 'firebase/app'
import enablePersistance from '@tenjojeremy/web-toolkit/build/Database/Firestore/Utils/firestore.persistance'
import enablePerfMonitoring from '@tenjojeremy/web-toolkit/build/Analytics/Firebase/analytics.index'

import config from './firebase.config'

firebase.initializeApp(config)

enablePerfMonitoring(firebase)
enablePersistance(firebase)
