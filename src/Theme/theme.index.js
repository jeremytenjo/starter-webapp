import React from 'react'

import MaterialUI from './Vendors/MaterialUi'
import { colors } from './Colors/colors.index'
import './Typography/Fonts/fonts.css'

export default ({ children }) => (
  <MaterialUI myTheme={colors}>{children}</MaterialUI>
)
