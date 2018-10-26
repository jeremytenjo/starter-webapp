//Vendors
import React, { useState } from 'react'
import styled from 'styled-components'

const Home = () => {
  const [count, setCount] = useState(0)

  return (
    <Wrapper>
      Home
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </Wrapper>
  )
}

//Style
const Wrapper = styled.div``

export default Home
