// Vendors
import React, { setGlobal } from 'reactn'

// States
import { userInitState as user } from '../User/User.state'
import ThemeManifestModule from '../Theme/Theme.manifest'

const { ThemeManifest: theme } = ThemeManifestModule

setGlobal({ user, theme })

// Exports
export default ({ children }) => <>{children}</>
