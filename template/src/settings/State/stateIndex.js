import React from 'react'
import { Provider } from 'mobx-react'

// Components
import User from '../User/userIndex'

const States = { User }

export default ({ children }) => <Provider {...States}>{children}</Provider>
