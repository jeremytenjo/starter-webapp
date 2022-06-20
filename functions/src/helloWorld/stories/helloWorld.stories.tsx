import React from 'react'
import FirebaseFunctionDashboard from '@useweb/firebase-function-tester'

import { HelloWorldProps } from '../helloWorld'

type HelloWorldArgsProps = {
  functionName: string
} & HelloWorldProps

const args: HelloWorldArgsProps = {
  functionName: 'helloWorld',
  payload: {
    name: 'Jeremy',
  },
}

export default {
  title: 'functions/helloWorld',
  args,
}

export const Default = {
  render: (args: HelloWorldArgsProps) => {
    return <FirebaseFunctionDashboard {...args} />
  },
}
