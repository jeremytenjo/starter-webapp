// Vendors
import React from 'react'
import MaterialUI from './Vendors/MaterialUi'
// Theme Manifest
import { ThemeManifest } from './Theme.manifest'
// Figma
import setColors from './Theme.Colors/Figma.Colors.set'
// Resets
import './Typography/Typography.resets.css'
// Global
import './Theme.Resets/tagBody.css'
import './Theme.Resets/Animations/transition.css'
import './Theme.Fonts/fonts.css'

// Set Globals
const { colors } = ThemeManifest

setColors(colors)

// Exports
export default ({ children }) => <MaterialUI ThemeManifest={ThemeManifest}>{children}</MaterialUI>
