// Vendors
import React, { setGlobal } from 'reactn'

// States
import { userInfo } from '../settings/User/userIndex'

const States = { userInfo }

setGlobal({
  ...States
})

// Exports
export default ({ children }) => <>{children}</>
