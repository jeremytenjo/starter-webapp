// Vendors
import React from 'react'
import MaterialUI from './vendors/MaterialUi'
// Theme Manifest
import { ThemeManifest } from './theme.manifest'
// Figma
import { setColors } from './Figma/Figma.index'

// Global
// import './tags/tagBody.css'
// import './fonts/fonts.css'
// import './properties/transition.css'

// Theme
console.log(ThemeManifest)
const { colors } = ThemeManifest

setColors(colors)

// Exports
export default ({ children }) => <MaterialUI ThemeManifest={ThemeManifest}>{children}</MaterialUI>
