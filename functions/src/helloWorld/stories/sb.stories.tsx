import React from 'react'
import FirebaseFunctionDashboard from '@useweb/firebase-function-tester'

export default {
  title: 'functions/helloWorld',
  args: {},
}

export const Default = {
  render: (args) => {
    const payload = {
      name: 'Jeremy',
    }

    return (
      <FirebaseFunctionDashboard functionName='helloWorld' payload={payload} {...args} />
    )
  },
}
