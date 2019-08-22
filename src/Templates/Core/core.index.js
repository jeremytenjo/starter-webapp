import React, { memo } from 'react'

import { Content } from './core.styles'

const Core = ({ children }) => {
  return (
    <>
      <Content>{children}</Content>
    </>
  )
}

export default memo(Core)
