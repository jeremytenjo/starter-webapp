import firebase from 'firebase/app'
import 'firebase/auth'

let config = {
  apiKey: 'AIzaSyAiPnRK-OClvUr0Q-tBOR1xMczXme2Kmcw',
  authDomain: 'app-template-react.firebaseapp.com',
  databaseURL: 'https://app-template-react.firebaseio.com',
  projectId: 'app-template-react',
  storageBucket: 'app-template-react.appspot.com',
  messagingSenderId: '219115772263'
}
firebase.initializeApp(config)
