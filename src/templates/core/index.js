import React, { memo } from 'react'

import { Content } from './styles'

const Core = ({ children }) => {
  return <Content>{children}</Content>
}

export default memo(Core)
