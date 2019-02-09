//Vendors
import React, { useState } from 'react'
import styled from 'styled-components'

const Page2 = () => {
  const [name, ,] = useState('Jeremy')

  return <Wrapper>{name}</Wrapper>
}

//Style
const Wrapper = styled.div``

export default Page2
