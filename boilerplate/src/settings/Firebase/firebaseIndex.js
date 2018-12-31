import firebase from 'firebase/app'
import 'firebase/auth'

let config = {
  apiKey: 'AIzaSyB1L1inpSmWPh4QTMaivEFD6oLo8RMvKmw',
  authDomain: 'webapp-jt.firebaseapp.com',
  databaseURL: 'https://webapp-jt.firebaseio.com',
  projectId: 'webapp-jt',
  storageBucket: '',
  messagingSenderId: '64204415951'
}
firebase.initializeApp(config)
