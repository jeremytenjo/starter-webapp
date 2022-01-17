// fonts
declare module '*.woff'
declare module '*.woff2'

// mdx
declare module '*.mdx'

// vite env variables
interface ImportMetaEnv {
  readonly VITE_FIREBASE_CONFIG_apiKey: string
  readonly VITE_FIREBASE_CONFIG_authDomain: string
  readonly VITE_FIREBASE_CONFIG_projectId: string
  readonly VITE_FIREBASE_CONFIG_storageBucket: string
  readonly VITE_FIREBASE_CONFIG_messagingSenderId: string
  readonly VITE_FIREBASE_CONFIG_appId: string
  readonly VITE_FIREBASE_CONFIG_measurementId: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
