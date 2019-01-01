// Vendors
import React, { setGlobal } from 'reactn'

// States
import userInfo from '../User/userInfo'

const States = { userInfo }

setGlobal({
  ...States
})

// Exports
export default ({ children }) => <>{children}</>
