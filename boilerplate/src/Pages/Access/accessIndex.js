//Vendors
import React, { useState } from 'react'
import { withRouter } from 'react-router'

//Ext Functions
// import Login from './accessLogin'
// import Register from './accessRegister'

const AccessIndex = () => {
  const [title, ,] = useState(window.location.pathname)

  return <div>{title}</div>
}

export default withRouter(AccessIndex)
