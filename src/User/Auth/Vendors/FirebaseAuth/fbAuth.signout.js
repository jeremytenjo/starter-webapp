import firebase from 'firebase/app'
import 'firebase/auth'

export default async () => await firebase.auth().signOut()
