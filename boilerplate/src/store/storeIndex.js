// Vendors
import React, { setGlobal } from 'reactn'

// States
import user from '../User/User.state'
import ThemeManifestModule from '../theme/theme.manifest'

const { ThemeManifest: theme } = ThemeManifestModule

setGlobal({ user, theme })

// Exports
export default ({ children }) => <>{children}</>
