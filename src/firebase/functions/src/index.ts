import * as functions from 'firebase-functions'

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const helloWorld = functions.https.onCall((data, context) => {
  return {
    hello: 'hello my name is',
  }
})
