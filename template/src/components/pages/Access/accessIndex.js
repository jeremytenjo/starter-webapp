//Vendors
import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router'

//Ext Functions
import Login from "./accessLogin"
import Register from "./accessRegister"

const AccessIndex = ({ history }) => {
  const [title, setTitle] = useState(window.location.pathname)

  return <div>{title}</div>
}

export default withRouter(AccessIndex)