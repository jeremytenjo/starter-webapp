import React from 'react'

import FirebaseFunctionDashboard from '../../../../src/lib/components/firebase/FirebaseFunctionDashboard/FirebaseFunctionDashboard'

export default {
  title: 'functions/helloWorld',
  args: {},
}

const Template = () => {
  const payload = {
    name: 'Jeremy',
  }
  return <FirebaseFunctionDashboard functionName='helloWorld' payload={payload} />
}

export const Example = Template.bind({})
