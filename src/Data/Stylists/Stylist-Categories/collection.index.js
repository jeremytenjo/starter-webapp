import React, { memo } from 'react'
import Icon from '@tenjojeremy/web-toolkit/build/Data-Display/Icon/Ui/React/Base/icon.index'

import { Wrapper } from './collection.styles'

const CategoryIconCollection = ({ onClick = () => null }) => {
  const handleClick = () => {
    onClick()
  }

  return (
    <Wrapper>
      <Icon
        data-cat='cut'
        name='scissors/1'
        color='primary'
        outlined
        onClick={handleClick}
        background
        noBackgroundChange
        size={60}
      />
    </Wrapper>
  )
}

export default memo(CategoryIconCollection)
