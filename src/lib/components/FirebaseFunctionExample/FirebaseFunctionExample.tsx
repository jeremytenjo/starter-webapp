import React from 'react'
import useFirebaseFunction from '@useweb/use-firebase-function'

export default function FirebaseFunctionExample() {
  const helloWorld = useFirebaseFunction({
    name: 'helloWorld',
  })

  return (
    <div>
      <button
        onClick={() =>
          helloWorld.exec({
            data: {
              name: 'Jeremy',
            },
          })
        }
      >
        Execute helloWorld firebase cloud function
      </button>

      {helloWorld.result && <p>Result: {helloWorld.result.hello}</p>}

      {helloWorld.error && <p>error: {helloWorld.error.toString()}</p>}
    </div>
  )
}
