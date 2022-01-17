const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_CONFIG_apiKey,
  authDomain: import.meta.env.VITE_FIREBASE_CONFIG_authDomain,
  projectId: import.meta.env.VITE_FIREBASE_CONFIG_projectId,
  storageBucket: import.meta.env.VITE_FIREBASE_CONFIG_storageBucket,
  messagingSenderId: import.meta.env.VITE_FIREBASE_CONFIG_messagingSenderId,
  appId: import.meta.env.VITE_FIREBASE_CONFIG_appId,
  measurementId: import.meta.env.VITE_FIREBASE_CONFIG_measurementId,
}

console.log(firebaseConfig)

export default firebaseConfig
